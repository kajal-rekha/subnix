import { Home, Mail, Phone } from "lucide-react";

const SupportPage = () => {
    return (
        <div className="min-h-screen pt-32 ">
            <div className="wrapper ">
                <div
                    className="
                grid grid-cols-1 md:grid-cols-2 gap-20 p-10"
                >
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl md:text-3xl ">
                            Contact for Support
                        </h2>
                        <p className="text-light/80">
                            Facing an issue or need help choosing a plan?
                        </p>
                        <p className="text-light/80">
                            Send us a message or contact us.
                        </p>
                        <div className="mt-10 flex flex-col gap-1">
                            <div className="flex  gap-2  items-center">
                                <span className="text-primary p-2  w-8 h-8 rounded-md bg-blue ">
                                    <Home className="w-full h-full" />
                                </span>{" "}
                                <div className="max-w-sm flex flex-col justify-center  gap-1  hover:bg-gray/10 eq p-5 rounded-md ">
                                    <p className="text-light/70  font-semibold">
                                        Our Location
                                    </p>
                                    <p className="text-light/70">
                                        House 12, Paharpara Lane Riverview
                                        Complex, Chattogram 4000 ,Bangladesh
                                    </p>
                                </div>
                            </div>
                            <div className="flex  gap-2  items-center">
                                <span className="text-primary p-2  w-8 h-8 rounded-md bg-blue ">
                                    <Phone className="w-full h-full" />
                                </span>{" "}
                                <div className="max-w-sm flex flex-col justify-center  gap-1  hover:bg-gray/10 eq p-5 rounded-md ">
                                    <p className="text-light/70  font-semibold">
                                        Phone Number
                                    </p>
                                    <p className="text-light/70">
                                        +1 800 123 4567
                                    </p>
                                </div>
                            </div>{" "}
                            <div className="flex  gap-2  items-center">
                                <span className="text-primary p-2  w-8 h-8 rounded-md bg-blue ">
                                    <Mail className="w-full h-full" />
                                </span>{" "}
                                <div className=" flex flex-col justify-center  gap-1  hover:bg-gray/10 eq p-5 rounded-md ">
                                    <p className="text-light/70  font-semibold">
                                        Email Address
                                    </p>
                                    <p className="text-light/70">
                                        support@subnix.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="flex flex-col items-center justify-center gap-5 bg-gray/5 py-14 px-20 w-full  mx-auto mt-10 rounded-md">
                        <div className="w-full flex flex-col gap-2">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="border border-light/20 p-3 rounded-md focus:border-light/60 outline-none eq"
                            />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label htmlFor="name">Email</label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="border border-light/20 p-3 rounded-md focus:border-light/60 outline-none eq"
                            />
                        </div>
                        <div className="w-full mt-5 flex flex-col ">
                            <textarea
                                name="message"
                                placeholder="Your message"
                                rows={4}
                                className="border border-light/20 p-3 rounded-md focus:border-light/60 outline-none resize-none eq"
                            ></textarea>
                        </div>
                        <button className="cursor-pointer bg-blue/80 py-2.5 px-5 rounded-md text-secondary mt-5 w-full hover:bg-blue eq">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
