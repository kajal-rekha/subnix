import Loading from "@/components/ui/Loading";
import { useState } from "react";

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <form className="login-form flex flex-col gap-5 mt-28 mx-auto max-w-lg">
            <h3 className="text-4xl font-medium">Login</h3>

            {/*======== Email ========*/}
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-3 border border-light/30 focus:border-light/60 rounded-md focus:outline-none"
                    placeholder="Enter your email"
                    required
                />
            </div>

            {/*======== Password ========*/}
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full px-4 py-3 border border-light/30 focus:border-light/60 rounded-md focus:outline-none"
                    placeholder="Enter your password"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={`py-3 px-4 rounded ${
                    isLoading
                        ? "bg-gray  cursor-not-allowed"
                        : "bg-secondary text-white hover:bg-primary mt-2 eq"
                }`}
            >
                {isLoading ? <Loading isLoading={isLoading} /> : "Sign Up"}
            </button>
        </form>
    );
};

export default LoginForm;
