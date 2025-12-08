import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const PlanCard = ({ plan }) => {
    const [loading, setLoading] = useState(false);

    const session = useSelector((state) => state.auth.userAndToken);

    console.log("session:", session);

    const router = useRouter();

    const handleSubscribe = async () => {
        const token = session?.token;
        const userId = session?.user?._id;

        if (!token) {
            toast.error("You must be logged in to proceed to checkout.");
            setTimeout(() => {
                router.push("/auth/sign-in?redirect=/plans");
            }, 500);
            return;
        }

        // ======== CHECK ACTIVE SUBSCRIPTION BEFORE CHECKOUT ======== //
        try {
            const res = await fetch("/api/subscriptions", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();

            if (!Array.isArray(data)) {
                toast.error(
                    "Unable to check subscription. Please login again."
                );
                return;
            }

            const hasActive = data.some(
                (s) => s.user_id?._id === userId && s.status === "active"
            );

            if (hasActive) {
                toast.error("You already have an active subscription!");
                return;
            }
        } catch (err) {
            console.log("Check error:", err);
            toast.error("Something went wrong while checking subscription.");
            return;
        }

        // ======== CONTINUE TO CHECKOUT IF NO ACTIVE PLAN ======== //
        try {
            setLoading(true);

            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    planId: plan._id,
                    planName: plan.name,
                    price: plan.price,
                    userId,
                }),
            });

            const data = await res.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                toast.error("Failed to initiate payment");
            }
        } catch (error) {
            console.error("Subscription error:", error);
        } finally {
            setLoading(false);
        }
    };

    // const handleSubscribe = async () => {
    //     const token = session?.token;

    //     if (!token) {
    //         toast.error("You must be logged in to proceed to checkout.");

    //         setTimeout(() => {
    //             router.push("/auth/sign-in?redirect=/plans");
    //         }, 500);
    //         return;
    //     }

    //     try {
    //         setLoading(true);
    //         const res = await fetch("/api/checkout", {
    //             method: "POST",
    //             headers: {
    //                 "content-type": "application/json",
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             body: JSON.stringify({
    //                 planId: plan._id,
    //                 planName: plan.name,
    //                 price: plan.price,
    //                 userId: session?.user?._id,
    //             }),
    //         });

    //         const data = await res.json();
    //         if (data.url) {
    //             window.location.href = data.url;
    //         } else {
    //             toast.error("Failed to initiate payment");
    //         }
    //     } catch (error) {
    //         console.error("Subscription error:", error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <div className="overflow-hidden  bg-secondary p-5 rounded-xl shadow-md border border-light/10 hover:border-blue/40 eq mt-5">
            <div
                className="flex flex-col gap-2  
                   text-light"
            >
                <div className="flex flex-col gap-2 p-3 rounded-md">
                    <h3 className="text-2xl"> {plan.name}</h3>
                    <p className="text-xl">
                        {" "}
                        ${plan.price} /{" "}
                        <span>
                            {" "}
                            {plan.duration} {plan.durationUnit}{" "}
                        </span>
                    </p>
                    <p></p>
                </div>
                <p className="mt-5">
                    Features :
                    {plan.features.map((feature, i) => (
                        <ul key={i} className=" mt-2 text-light/70 ">
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 bg-blue/30 p-1 rounded-full" />

                                {feature}
                            </li>
                        </ul>
                    ))}
                </p>

                <button
                    onClick={handleSubscribe}
                    disabled={loading}
                    className="bg-blue p-1.5 rounded-md cursor-pointer text-secondary mt-2"
                >
                    {loading ? "Processing..." : " Subscripe Plan"}
                </button>
            </div>
        </div>
    );
};

export default PlanCard;
