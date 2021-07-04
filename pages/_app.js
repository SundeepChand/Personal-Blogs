import useNProgress from "../hooks/useNProgress";

import hljs from "highlight.js";
import cpp from "highlight.js/lib/languages/cpp";
import plaintext from "highlight.js/lib/languages/plaintext";

import "../styles/globals.scss";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("plaintext", plaintext);

function MyApp({ Component, pageProps }) {
  useNProgress();

  return <Component {...pageProps} />;
}

export default MyApp;
