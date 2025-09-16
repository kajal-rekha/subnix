import createToken from "@/components/helpers/helper";
import User from "@/models/User";
import bcrypt from "bcrypt";

// ========= create user ======== //
export const createUser = async (req, res) => {
    try {
        const { username, email, password, image } = req.body;

        const user = await User.signup(username, email, password, image);

        const token = createToken(user._id);

        res.status(200).json({ user, token });

        return { user, token };
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ========= login user ======== //
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.login(email, password);

        const token = createToken(user._id);

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//======= Get All Users ========//
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({ createdAt: -1 });
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//======= Get An User ========//
export const getAnUser = async (req, res) => {
    try {
        const { id } = req.query;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found!" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ========= update user ======== //
export const updateUser = async (req, res) => {
    try {
        const { id } = req.query;
        const { username, email, password, image } = req.body;

        const updateData = { username, email, password, image };

        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(password, salt);
        }

        const updatedUser = await User.findByIdAndUpdate(id, updateData, {
            new: true,
        });

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//========= Delete user ========//
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.query;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            message: "User deleted successfully",
            deletedUser,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
