import LoginForm from "./auth/login";
import SignupForm from "./auth/sign-up";

const HomePage = () => {
    return (
        <div className="wrapper">
            {/* <SignupForm /> */}
            <LoginForm />
        </div>
    );
};

export default HomePage;
