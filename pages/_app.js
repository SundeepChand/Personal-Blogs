import { useEffect } from "react";
import { useRouter } from "next/router";

import NProgress from "nprogress";

import hljs from "highlight.js";
import cpp from "highlight.js/lib/languages/cpp";
import plaintext from "highlight.js/lib/languages/plaintext";

import "../styles/globals.scss";
import "highlight.js/styles/atom-one-dark.css";

NProgress.configure({
  showSpinner: false,
  trickleRate: 0.05,
  trickleSpeed: 700,
});

hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("plaintext", plaintext);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });
    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
    router.events.on("routeChangeError", () => {
      NProgress.done();
    });
    return () => {
      router.events.off("routeChangeStart", () => {
        NProgress.done();
      });
      router.events.off("routeChangeComplete", () => {
        NProgress.done();
      });
      router.events.off("routeChangeError", () => {
        NProgress.done();
      });
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
