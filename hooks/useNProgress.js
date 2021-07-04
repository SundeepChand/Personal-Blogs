import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

export default function useNProgress() {
  NProgress.configure({
    showSpinner: false,
    trickleRate: 0.05,
    trickleSpeed: 700,
  });

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
}
