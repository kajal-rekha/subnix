"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SubscriptionsPage = () => {
    const [subscription, setSubscription] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const session = useSelector((state) => state.auth.userAndToken);

    useEffect(() => {
        if (!session) return;

        const token = session?.token;

        const fetchSubscriptions = async () => {
            try {
                const response = await fetch("/api/subscriptions", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setError(
                        errorData.error || "Failed to fetch subscriptions"
                    );
                } else {
                    const data = await response.json();
                    console.log("Fetched Subscriptions:", data);


                    const sorted = data.sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    );

                    setSubscription(sorted);
                }
            } catch (err) {
                setError("Server error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchSubscriptions();
       
    }, [session]);

    return (
        <div className="wrapper pt-28 min-h-screen">
            <h2 className="text-3xl font-bold mb-6">Your Subscriptions</h2>

           
            {loading && (
                <p className="text-lg text-blue font-medium">Loading...</p>
            )}

       
            {error && (
                <p className="text-red-500 font-medium bg-red-100 p-2 rounded">
                    {error}
                </p>
            )}

          
            {!loading && !error && subscription.length === 0 && (
                <p className="text-gray-600 text-lg">No subscriptions found.</p>
            )}

      
            <div className="">
                {subscription.map((sub) => (
                    <div
                        key={sub._id}
                        className="p-4 bg-white text-black shadow rounded border"
                    >
                        <h3 className="text-xl font-semibold">
                            {sub.plan_id?.name || "Unknown Plan"}
                        </h3>

                        <p className="text-gray-700">
                            Price: {sub.plan_id?.price} BDT
                        </p>

                        <p className="text-gray-700">
                            Duration: {sub.plan_id?.duration}{" "}
                            {sub.plan_id?.durationUnit}
                        </p>

                        <p className="text-gray-700">
                            User: {sub.user_id?.username} ({sub.user_id?.email})
                        </p>

                        <p className="text-gray-700">
                            Status:{" "}
                            <span className="font-medium">{sub.status}</span>
                        </p>

                        <p className="text-gray-600 text-sm">
                            Date: {new Date(sub.createdAt).toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionsPage;
