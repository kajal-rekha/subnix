import { connectDB } from "@/lib/db";
import Plan from "@/models/Plan";
import Subscription from "@/models/Subscription";
import Stripe from "stripe";

export const config = {
    api: { bodyParser: false },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    await connectDB();

    const sig = req.headers["stripe-signature"];
    const buf = await buffer(req);

    let event;
    try {
        event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);
    } catch (err) {
        console.error(" Webhook signature verification failed:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object;
            const userId = session.metadata?.userId;
            const planId = session.metadata?.planId;

            console.log("✅ Payment successful for user:", userId);

            const plan = await Plan.findById(planId);
            if (plan) {
                const expiresAt = new Date();
                if (plan.durationUnit === "day")
                    expiresAt.setDate(expiresAt.getDate() + plan.duration);
                if (plan.durationUnit === "month")
                    expiresAt.setMonth(expiresAt.getMonth() + plan.duration);
                if (plan.durationUnit === "year")
                    expiresAt.setFullYear(
                        expiresAt.getFullYear() + plan.duration
                    );

                await Subscription.create({
                    userId,
                    planId,
                    paymentStatus: "paid",
                    stripeSessionId: session.id,
                    amount: session.amount_total / 100,
                    currency: session.currency,
                    expiresAt,
                });
            }
            break;
        }

        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).json({ received: true });
}

async function buffer(readable) {
    const chunks = [];
    for await (const chunk of readable) {
        chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}
