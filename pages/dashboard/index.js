import Link from "next/link";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const session = useSelector((state) => state.auth.userAndToken);
    console.log("Redux session : ", session);

    return (
        <div className="wrapper pt-32 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold tracking-wide">
                Welcome {session?.username}{" "}
            </h2>
            <p className="text-light/80 text-lg font-medium mt-2">
                {`You don't have an active Subscription Plan!`}
            </p>
            <p className="text-light/80 text-lg font-medium">
                To unlock features, please choose a plan.
            </p>
            <Link
                href="/plans"
                className="bg-blue p-2 rounded-md cursor-pointer text-secondary mt-4"
            >
                View All Plans
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full max-w-3xl">
                <div className="p-4 border rounded-lg shadow-sm text-center">
                    <Link href="/plans">Access premium features</Link>
                </div>
                <div className="p-4 border rounded-lg shadow-sm text-center">
                    <Link href="/plans"> Unlimited usage</Link>
                </div>
                <div className="p-4 border rounded-lg shadow-sm text-center">
                    <Link href="/plans">
                        Access premium feature Priority support
                    </Link>
                </div>
            </div>

            <p className="text-sm text-light/60 mt-6">
                Need help choosing a plan?{" "}
                <span className="text-blue cursor-pointer">
                    Contact Support
                </span>
            </p>
        </div>
    );
};

export default Dashboard;
