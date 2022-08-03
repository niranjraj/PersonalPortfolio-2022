import "../styles/style.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Loader from "../components/Loader";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <Provider store={store}>
      <Component {...pageProps} />{" "}
    </Provider>
  );
}

export default MyApp;
