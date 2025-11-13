import { CheckCircle } from "lucide-react";
import Link from "next/link";

const SuccessPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-secondary text-light px-4">
            <div className="flex flex-col items-center text-center max-w-md">
                <CheckCircle className="w-16 h-16 text-green mb-4" />
                <h1 className="text-3xl font-semibold mb-2">
                    Payment Successful
                </h1>
                <p className="text-light/70 mb-6">
                    Thank you for subscribing! Your plan has been activated
                    successfully.
                </p>

                <Link
                    href="/subscription"
                    className="bg-blue text-secondary px-6 py-2 rounded-md hover:bg-blue/80 transition-all"
                >
                    Go to Subscription Page
                </Link>
            </div>
        </div>
    );
};

export default SuccessPage;
