import { connectDB } from "@/lib/db";
import Subscription from "@/models/Subscription";
import cron from "node-cron";

let jobStarted = false;

export default async function handler(req, res) {
    if (!jobStarted) {
        cron.schedule("0 0 * * *", async () => {
            await connectDB();
            await Subscription.updateMany(
                { endDate: { $lt: new Date() }, status: "active" },
                { $set: { status: "expired" } }
            );
            console.log("Expired subscriptions updated");
        });
        jobStarted = true;
    }

    res.status(200).json({ message: "Cron job initialized" });
}
