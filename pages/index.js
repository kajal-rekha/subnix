import Navbar from "@/components/shared/Navbar";
import SignupForm from "./auth/sign-up";

const HomePage = () => {
    return (
        <div className="wrapper">
            <Navbar/>
            <SignupForm />
            {/* <LoginForm /> */}
        </div>
    );
};

export default HomePage;
