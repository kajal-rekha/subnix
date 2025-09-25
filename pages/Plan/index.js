import PlanCard from "@/components/PlanCard";
import { useEffect, useState } from "react";

const Plan = () => {
    const [plans, setPlans] = useState([]);

    const fetchPlans = async () => {
        try {
            const res = await fetch("/api/plans");
            if (!res) {
                throw new Error("Failed to fetch plans");
            }
            const data = await res.json();
            setPlans(data);
            console.log("plans fetched:", data);
        } catch (err) {
            console.error("Error fetching plans:", err);
        }
    };
    useEffect(() => {
        fetchPlans();
    }, []);
    return (
        <div className="min-h-screen  pt-20 md:ml-52 ml-0 ">
            {plans.map((plan) => (
                <PlanCard key={plan._id} plan={plan} />
            ))}
        </div>
    );
};

export default Plan;
