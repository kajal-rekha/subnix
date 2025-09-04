import { AlignJustify } from "lucide-react";

import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="h-20 fixed top-0 left-0 right-0 z-[999] text-light flex items-center ">
            <div className="wrapper ">
                <div className="border-b border-light/10 pb-5 flex items-center justify-between ">
                    {/*====== Sidebar Toggle  =====*/}
                    <div className="flex items-center gap-2">
                        <div>
                            <h2 className="hidden md:block">Subnix</h2>
                        </div>

                        <AlignJustify
                            onClick={toggleSidebar}
                            className="cursor-pointer text-dark/80 dark:text-light w-5 h-5 md:w-7 md:h-7 z-10"
                            aria-label="Toggle Sidebar"
                        />
                    </div>

                    <div>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} />
        </div>
    );
};

export default Navbar;
