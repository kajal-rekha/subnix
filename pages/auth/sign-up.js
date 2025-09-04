import Loading from "@/components/ui/Loading";
import { useState } from "react";

const SignupForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <form className="signup-form flex flex-col gap-5 mt-28 mx-auto max-w-lg">
            <h3 className="text-4xl font-medium">Signup</h3>

            {/*======== Username ========*/}
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="w-full px-4 py-3 border border-light/30 focus:border-light/60 rounded-md focus:outline-none"
                    placeholder="Enter your username"
                    required
                />
            </div>

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

            {/*======== Image ========*/}
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="image">Image</label>
                <div className="relative w-full">
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        className="w-full px-4 py-3 border border-light/30 focus:border-light/60 rounded-md focus:outline-none"
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={`py-3 px-4 rounded ${
                    isLoading
                        ? "bg-gray cursor-not-allowed"
                        : "bg-secondary text-light hover:bg-primary mt-2 eq"
                }`}
            >
                {isLoading ? <Loading isLoading={isLoading} /> : "Sign Up"}
            </button>
        </form>
    );
};

export default SignupForm;
