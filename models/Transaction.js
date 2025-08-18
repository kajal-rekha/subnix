import mongoose from "mongoose";

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        subscription_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subscription",
            required: true,
        },

        tran_id: {
            type: String,
            required: true,
        },

        amount: {
            type: Number,
            required: true,
        },

        status: {
            type: String,
            enum: ["pending", "completed", "failed", "refunded"],
            default: "pending",
            required: true,
        },

        date: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Transaction ||
    mongoose.model("Transaction", transactionSchema);
