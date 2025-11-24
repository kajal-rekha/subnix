import {
    cancelSubscription,
    expireSubscription,
    getASubscription,
    updateSubscription,
} from "@/controllers/subscriptionController";
import { connectDB } from "@/lib/db";
import isAuthenticated from "@/middlewares/auth";
import isAdmin from "@/middlewares/isAdmin";

export default async function handler(req, res) {
    await connectDB();

    if (req.method === "GET") {
        return getASubscription(req, res);
    } else if (req.method === "PUT") {
        const { action } = req.query;

        if (action === "update") {
            await isAuthenticated(req, res, async () => {
                await isAdmin(req, res, async () => {
                    return updateSubscription(req, res);
                });
            });
        } else if (action === "cancel") {
            return cancelSubscription(req, res);
        } else if (action === "expire") {
            return expireSubscription(req, res);
        } else {
            return res.status(400).json({ error: "Invalid action parameter" });
        }
    } else {
        res.setHeader("Allow", ["GET", "PUT"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }
}
