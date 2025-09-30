const SupportPage = () => {
    return (
        <div className="min-h-screen pt-32 ">
            <div className="wrapper ">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h2 className="text-2xl md:text-3xl ">Contact Support</h2>
                    <p className="text-light/80 ">
                        {" "}
                        Facing an issue or need help choosing a plan? Send us a
                        message below.
                    </p>
                </div>

                <form className="flex flex-col items-center justify-center gap-5 bg-secondary p-20 max-w-3xl mx-auto mt-10 rounded-md">
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
                            className="border border-light/20 p-3 rounded-md focus:border-light/60 outline-none eq"
                        ></textarea>
                    </div>
                    <button className="cursor-pointer bg-blue/80 py-2.5 px-5 rounded-md text-secondary mt-5 w-full hover:bg-blue eq">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SupportPage;
