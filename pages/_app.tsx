import "../styles/style.scss";

import Head from "next/head";
import type { AppProps } from "next/app";

import "locomotive-scroll/src/locomotive-scroll.scss";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="en-US" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, 
      shrink-to-fit=no"
        />
        <meta name="title" content="NiranjRaj - 2022" />
        <meta
          name="description"
          content="A passionate creative frontend developer.I love to create new and
              awesome features, Optimized to perform across all devices and
              provide a solid experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NiranjRaj - 2022" />
        <meta property="og:site_name" content="NiranjRaj - 2022" />
        <meta property="og:url" content="https://www.niranjraj.me" />
        <meta
          property="og:description"
          content="A passionate creative frontend developer.I love to create new and
              awesome features, Optimized to perform across all devices and
              provide a solid experience."
        />
        <meta
          property="og:image"
          content="https://www.niranjraj.me/static/Logo.png"
        />

        <meta property="twitter:title" content="NiranjRaj - 2022" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.niranjraj.me" />
        <meta
          property="twitter:description"
          content="A passionate creative frontend developer.I love to create new and
              awesome features, Optimized to perform across all devices and
              provide a solid experience"
        />
        <meta
          property="twitter:image"
          content="https://www.niranjraj.me/static/Logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="preload"
          href="/fonts/IvyMode/IvyMode-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/WorkSans/WorkSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <title>NiranjRaj - 2022</title>
      </Head>
      <Component {...pageProps} />{" "}
    </Provider>
  );
}

export default MyApp;
