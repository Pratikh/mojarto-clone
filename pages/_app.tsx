import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";

axios.defaults.baseURL = process.env.HOST;

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Header />
        <div className="content">
          <Component {...pageProps} />
        </div>
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
