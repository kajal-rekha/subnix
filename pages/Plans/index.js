import PlanCard from "@/components/PlanCard";
import { useEffect, useState } from "react";

const Plans = () => {
    const [plans, setPlans] = useState([]);
    // const [subscription, setsubscription] = useState([]);

    const fetchPlans = async () => {
        try {
            const res = await fetch("/api/plans");
            if (!res) {
                throw new Error("Failed to fetch plans");
            }
            const data = await res.json();

            const order = ["Free", "Basic", "Standard", "Pro"];
            const sortedPlans = data.sort(
                (a, b) => order.indexOf(a.name) - order.indexOf(b.name)
            );

            setPlans(sortedPlans);
            console.log("plans fetched:", sortedPlans);
        } catch (err) {
            console.error("Error fetching plans:", err);
        }
    };
    useEffect(() => {
        fetchPlans();
    }, []);

    // const fetchSubscription = async () => {
    //     try {
    //         const res = await fetch("/api/subscriptions");
    //         if (!res) {
    //             throw new Error("Failed to fetch plans");
    //         }
    //         const data = await res.json();
    //         setsubscription(data);
    //         console.log("subscription fetched:", data);
    //     } catch (err) {
    //         console.error("Error fetching plans:", err);
    //     }
    // };
    // useEffect(() => {
    //     fetchSubscription();
    // }, []);
    return (
        <div className="min-h-screen  pt-20 md:ml-60 ml-0 ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {plans.map((plan) => (
                    <PlanCard key={plan._id} plan={plan} />
                ))}
            </div>
        </div>
    );
};

export default Plans;
