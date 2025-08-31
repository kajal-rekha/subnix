import { createPlan, getAllPlans } from "@/controllers/planController";
import { connectDB } from "@/lib/db";

export default async function handler(req, res) {
    await connectDB();

    if (req.method === "POST") {
        return createPlan(req, res);
    } else if (req.method === "GET") {
        return getAllPlans(req, res);
    } else {
        res.setHeader("Allow", ["GET", "POST"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }
}
