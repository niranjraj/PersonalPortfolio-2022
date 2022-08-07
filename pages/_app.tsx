import "../styles/style.scss";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Loader from "../components/Loader";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { Provider } from "react-redux";
import store from "../redux/store";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader load={loading} setLoading={setLoading} />;
  }
  return (
    <Provider store={store}>
      <Component {...pageProps} />{" "}
    </Provider>
  );
}

export default MyApp;
