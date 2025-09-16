import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ReduxProvider from "@/providers/ReduxProvider";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps }) {
    return (
        <ReduxProvider>
            <SessionProvider session={pageProps.session}>
                <>
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                </>
            </SessionProvider>
        </ReduxProvider>
    );
}
