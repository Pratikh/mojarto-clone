import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="content">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
