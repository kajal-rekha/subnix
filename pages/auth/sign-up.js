import Loading from "@/components/ui/Loading";
import { useState } from "react";

const SignupForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            <div className=" bg-slate-950 shadow-xl rounded-lg p-10 relative z-[100] w-[80vw] lg:w-[50vw] max-h-[100vh] mx-auto pt-20">
                <h3 className=" text-white flex justify-center text-lg">
                    Sign Up
                </h3>
                <form className="flex flex-col gap-1 md:gap-5 mt-3 md:mt-8 p-5">
                    <div className="flex flex-col gap-5 items-center text-white">
                        {/*======== Username ========*/}
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 rounded-md focus:outline-none"
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
                                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 rounded-md focus:outline-none"
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
                                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 rounded-md focus:outline-none"
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
                                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 rounded-md focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`py-3 px-4 rounded ${
                            isLoading
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-slate-900 text-white hover:bg-slate-800 mt-2 eq"
                        }`}
                    >
                        {isLoading ? (
                            <Loading isLoading={isLoading} />
                        ) : (
                            "Sign Up"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
