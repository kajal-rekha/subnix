import Plan from "@/models/Plan";
import Subscription from "@/models/Subscription";

// ========= create subscription ======== //
export const createSubscription = async (req, res) => {
    try {
        const { user_id, plan_id } = req.body;

        //========= find plan =========//
        const plan = await Plan.findById(plan_id);

        if (!plan) {
            return res.status(404).json({ error: "Plan not found!" });
        }

        //====== endDate calculate =======//
        let endDate = new Date();

        if (plan.durationUnit === "day") {
            endDate.setDate(endDate.getDate() + plan.duration);
        } else if (plan.durationUnit === "month") {
            endDate.setMonth(endDate.getMonth() + plan.duration);
        } else if (plan.durationUnit === "year") {
            endDate.setFullYear(endDate.getFullYear() + plan.duration);
        }

        const subscription = new Subscription({
            user_id,
            plan_id,
            startDate: new Date(),
            endDate,
            status: "active",
        });

        await subscription.save();

        res.status(200).json(subscription);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//======= Get All subscriptions ========//
export const getAllSubscriptions = async (req, res) => {
    try {
        const subscriptions = await Subscription.find({})
            .populate("user_id", "username email")
            .populate("plan_id", "name price duration durationUnit")
            .sort({ createdAt: -1 });
        res.status(200).json(subscriptions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//======= Get A subscription ========//
export const getASubscription = async (req, res) => {
    try {
        const { id } = req.query;
        const subscription = await Subscription.findById(id)
            .populate("user_id", "username email")
            .populate("plan_id", "name price duration durationUnit");

        if (!subscription) {
            return res.status(404).json({ error: "Subscription not found!" });
        }

        res.status(200).json(subscription);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ========= update subscription ======== //
export const updateSubscription = async (req, res) => {
    try {
        const { id } = req.query;
        const updateData = req.body;

        const updatedSubscription = await Subscription.findByIdAndUpdate(
            id,
            updateData,
            {
                new: true,
            }
        );

        if (!updatedSubscription) {
            return res.status(404).json({ error: "Subscription not found" });
        }

        res.status(200).json({ updatedSubscription });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//========= cancel subscription ========//
export const cancelSubscription = async (req, res) => {
    try {
        const { id } = req.query;

        const subscription = await Subscription.findByIdAndUpdate(
            id,
            { status: "canceled" },
            { new: true }
        );

        if (!subscription) {
            return res.status(404).json({ error: "Subscription not found" });
        }

        res.status(200).json({
            message: "Subscription canceled!",
            subscription,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//========= expire subscription ========//
export const expireSubscription = async (req, res) => {
    try {
        const { id } = req.query;

        const subscription = await Subscription.findById(id);

        if (!subscription) {
            return res.status(404).json({ error: "Subscription not found" });
        }

        if (subscription.endDate < new Date()) {
            subscription.status = "expired";
            await subscription.save();
        }

        res.status(200).json(subscription);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
