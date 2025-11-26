"use client";

import Loading from "@/components/ui/Loading";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SuccessPage = () => {
    const [latestSub, setLatestSub] = useState(null);
    const session = useSelector((state) => state.auth.userAndToken);

    useEffect(() => {
        if (!session) return;

        const fetchUserSubscription = async () => {
            try {
                const res = await fetch("/api/subscriptions", {
                    headers: {
                        Authorization: `Bearer ${session.token}`,
                        "Content-Type": "application/json",
                    },
                });

                const data = await res.json();

                const userSubs = Array.isArray(data)
                    ? data.filter((sub) => sub.user_id._id === session.user._id)
                    : [];

                const latest = userSubs.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                )[0];

                setLatestSub(latest || null);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUserSubscription();
    }, [session]);

    if (!latestSub)
        return (
            <p className="pt-32">
                <Loading />
            </p>
        );

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-secondary text-light px-4">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl font-semibold mb-2">
                    Payment Successful
                </h2>

                <p className="text-light/70 ">
                    Plan Name: {latestSub.plan_id?.name}
                </p>
                <p className="text-light/70 ">
                    PlanId: {latestSub.plan_id?._id}
                </p>
                <Link
                    href={`/subscriptions/${latestSub._id}`}
                    className="bg-blue text-secondary px-6 py-2 rounded-md hover:bg-blue/80 eq mt-2"
                >
                    Go to your Subscription page
                </Link>
            </div>
        </div>
    );
};

export default SuccessPage;
