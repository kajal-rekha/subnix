import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ReduxProvider from "@/providers/ReduxProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <ReduxProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </ReduxProvider>
    );
}
