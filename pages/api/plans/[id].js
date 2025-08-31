import { deletePlan, getAPlan, updatePlan } from "@/controllers/planController";
import { connectDB } from "@/lib/db";

export default async function handler(req, res) {
    await connectDB();

    if (req.method === "GET") {
        return getAPlan(req, res);
    } else if (req.method === "PUT") {
        return updatePlan(req, res);
    } else if (req.method === "DELETE") {
        return deletePlan(req, res);
    } else {
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }
}
