import { deletePlan, getAPlan, updatePlan } from "@/controllers/planController";
import { connectDB } from "@/lib/db";
import isAuthenticated from "@/middlewares/auth";
import isAdmin from "@/middlewares/isAdmin";

export default async function handler(req, res) {
    await connectDB();

    if (req.method === "GET") {
        return getAPlan(req, res);
    } else if (req.method === "PUT") {
        await isAuthenticated(req, res, async () => {
            await isAdmin(req, res, async () => {
                return updatePlan(req, res);
            });
        });
    } else if (req.method === "DELETE") {
        await isAuthenticated(req, res, async () => {
            await isAdmin(req, res, async () => {
                return deletePlan(req, res);
            });
        });
    } else {
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }
}
