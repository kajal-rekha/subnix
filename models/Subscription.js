import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        plan_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Plan",
            required: true,
        },
        status: {
            type: String,
            enum: ["active", "inactive", "canceled"],
            default: "active",
            required: true,
        },
        startDate: {
            type: Date,
            default: Date.now,
        },
        endDate: {
            type: Date,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Subscription ||
    mongoose.model("Subscription", SubscriptionSchema);
