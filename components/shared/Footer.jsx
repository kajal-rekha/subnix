const Footer = () => {
    return (
        <div className="wrapper">
            <div className="justify-center p-8">
                <div className="">
                    <p className="text-center text-light/50  mt-8">
                        &copy; {new Date().getFullYear()} Subnix. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
