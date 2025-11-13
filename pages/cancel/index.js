import { XCircle } from "lucide-react";
import Link from "next/link";

const CancelPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-secondary text-light px-4">
            <div className="flex flex-col items-center text-center max-w-md">
                <XCircle className="w-16 h-16 text-red mb-4" />
                <h1 className="text-3xl font-semibold mb-2">
                    Payment Canceled
                </h1>
                <p className="text-light/70 mb-6">
                    Your payment was canceled. No charges have been made.
                </p>

                <Link
                    href="/plans"
                    className="bg-blue text-secondary px-6 py-2 rounded-md hover:bg-blue/80 transition-all"
                >
                    Back to Plans
                </Link>
            </div>
        </div>
    );
};

export default CancelPage;
