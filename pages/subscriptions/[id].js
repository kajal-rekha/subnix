"use client";

import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SubscriptionDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const session = useSelector((state) => state.auth.userAndToken);

    const [subscription, setSubscription] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!session || !id) return;

        const fetchSubscription = async () => {
            try {
                const res = await fetch(`/api/subscriptions/${id}`, {
                    headers: {
                        Authorization: `Bearer ${session.token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) {
                    const err = await res.json();
                    setError(err.error || "Failed to fetch subscription");
                } else {
                    const data = await res.json();
                    setSubscription(data);
                }
            } catch (err) {
                setError("Server error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchSubscription();
    }, [session, id]);

    if (loading)
        return (
            <div className="pt-32">
                <Loading />
            </div>
        );
    if (error)
        return (
            <div className="pt-28 text-red">
                <Error />
            </div>
        );
    if (!subscription) return <p className="pt-28">No subscription found</p>;

    const plan = subscription.plan_id || {};

    return (
        <div className="wrapper pt-28 min-h-screen">
            <h2 className="text-3xl mb-6">Subscription Details</h2>
            <div className="p-4 bg-light text-black shadow rounded border max-w-3xl">
                <h3 className="text-xl">Name: {plan.name}</h3>
                <p>Price: {plan.price} BDT</p>
                <p>
                    Duration: {plan.duration} {plan.durationUnit}
                </p>
                <div>
                    <p className="font-semibold">Features:</p>
                    {subscription.plan_id?.features &&
                    subscription.plan_id.features.length > 0 ? (
                        <ul className="list-disc pl-5">
                            {subscription.plan_id.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No features added</p>
                    )}
                </div>

                <p>Status: {subscription.status}</p>
                <p>
                    Start Date:{" "}
                    {new Date(subscription.startDate).toLocaleString()}
                </p>
                <p>
                    End Date:{" "}
                    {subscription.endDate
                        ? new Date(subscription.endDate).toLocaleString()
                        : "N/A"}
                </p>
                <p>
                    Created At:{" "}
                    {new Date(subscription.createdAt).toLocaleString()}
                </p>
            </div>
        </div>
    );
};

export default SubscriptionDetailsPage;
