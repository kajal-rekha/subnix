import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Plan = () => {
    const [plan, setPlan] = useState();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (!id) return;

        const fetchPlan = async () => {
            try {
                const res = await fetch(`/api/plan/${id}`);
                if (!res) {
                    throw new Error("Failed to fetch plans");
                }
                const data = await res.json();
                setPlan(data);
                console.log("plans fetched:", data);
            } catch (err) {
                console.error("Error fetching plans:", err);
            }
        };
        fetchPlan();
    }, [id]);

    return <div>{plan.name}</div>;
};

export default Plan;
