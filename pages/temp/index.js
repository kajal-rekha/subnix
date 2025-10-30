import PlanCard from "@/components/PlanCard";
import Loading from "@/components/ui/Loading";
import { useEffect, useState } from "react";

const Plans = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [subscription, setsubscription] = useState([]);

    const fetchPlans = async () => {
        try {
            setLoading(true);
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
        setLoading(false);
    };
    useEffect(() => {
        fetchPlans();
    }, []);

    // const colors = {
    //     Free: "border-gray-100  bg-gray-500 text-black",
    //     Basic: "border-blue-500 bg-blue-900 text-black",
    //     Standard: "border-green-900 bg-green-500 text-black",
    //     Pro: "border-white bg-purple-500 text-black",
    // };

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
        <div className="min-h-screen  pt-32 wrapper">
            <div>
                <div className="flex flex-col gap-1 items-center jistify-center mb-10">
                    <span className="text-blue font-medium "> Pricing</span>
                    <h2 className="text-2xl  md:text-4xl font-medium">
                        Choose your plan
                    </h2>
                    <p className="text-light/80  max-w-3xl text-lg text-center">
                        {` Pick the perfect plan that fits your goals. Whether
                        you’re just getting started or scaling fast, we’ve got a
                        plan that grows with you.`}
                    </p>
                </div>

                {loading ? (
                    <Loading />
                ) : plans.length === 0 ? (
                    <p className="text-light/80 justify-center text-lg text-center">
                        No plans found!
                    </p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  ">
                        {plans.map((plan) => (
                            <PlanCard key={plan._id} plan={plan} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Plans;
