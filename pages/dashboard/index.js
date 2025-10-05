import { Crown, Infinity, Phone, UserStar } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const session = useSelector((state) => state.auth.userAndToken);

    return (
        <div className="wrapper pt-32 flex flex-col items-center justify-center text-center gap-1">
            <h2 className="text-4xl font-bold tracking-wide">
                Welcome {session?.username}{" "}
            </h2>
            <p className="text-light/80 text-lg font-medium mt-2">
                {`You don't have an active Subscription Plan!`}
            </p>
            <p className="text-light/80 text-lg font-medium">
                Choose a plan to unlock premium features and tools.
            </p>
            <Link
                href="/plans"
                className="cursor-pointer bg-blue py-2.5 px-5 rounded-md text-secondary mt-2 "
            >
                View All Plans
            </Link>

            <div className="grid grid-cols-3 gap-6 mt-14 w-full max-w-3xl">
                <div className="p-5 border rounded-lg shadow-sm text-center flex flex-col items-center gap-2 border-light/10 hover:border-light/20 eq">
                    <span className=" p-1 w-8 h-8 rounded-md">
                        <Crown className="w-full h-full text-yellow/70" />
                    </span>
                    <h3 className="text-[0.8rem] md:text-[1rem] font-semibold">
                        Premium Features
                    </h3>
                    <p className="text-light/80 text-[0.9rem] md:text-[1rem]">
                        unlock advancd tools and exclusive access
                    </p>
                </div>
                <div className="p-5 border rounded-lg shadow-sm text-center flex flex-col items-center  gap-2 border-light/10 hover:border-light/20 eq">
                    <span className=" p-1 w-8 h-8 rounded-md">
                        <Infinity className="w-full h-full text-yellow/70" />
                    </span>
                    <h3 className="text-[0.8rem] md:text-[1rem] font-semibold">
                        Unlimited Usages
                    </h3>
                    <p className="text-light/80 text-[0.9rem] md:text-[1rem]">
                        No limits once you upgrade your plan.
                    </p>
                </div>
                <div className="p-5 border rounded-lg shadow-sm text-center flex flex-col items-center gap-2 border-light/10 hover:border-light/20 eq">
                    <span className=" p-1 w-8 h-8 rounded-md">
                        <UserStar className="w-full h-full text-yellow/70" />
                    </span>
                    <h3 className="text-[0.8rem] md:text-[1rem] font-semibold">
                        Priority Support
                    </h3>
                    <p className="text-light/80 text-[0.9rem] md:text-[1rem]">
                        Get fast help whenever you need it.
                    </p>
                </div>
            </div>

            <p className="text-sm text-light/60 mt-6">
                Need help choosing a plan?{" "}
                <Link href="/support" className="text-blue cursor-pointer">
                    Contact Support
                </Link>
            </p>
        </div>
    );
};

export default Dashboard;
