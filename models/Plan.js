import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PlanSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        durationUnit: {
            type: String,
            enum: ["day", "month", "year"],
            default: "month",
            required: true,
        },
        features: [
            {
                type: String,
                required: true,
            },
        ],
    },
    { timestamps: true }
);

export default mongoose.models.Plan || mongoose.model("Plan", PlanSchema);
