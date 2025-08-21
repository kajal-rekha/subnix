import { createUser, getAllUsers } from "@/controllers/userController";
import { connectDB } from "@/lib/db";

export default async function handler(req, res) {
    await connectDB();

    if (req.method === "POST") {
        return createUser(req, res);
    } else if (req.method === "GET") {
        return getAllUsers(req, res);
    } else {
        res.setHeader("Allow", ["GET", "POST"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }
}
