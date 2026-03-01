import useNProgress from "../hooks/useNProgress";

import hljs from "highlight.js";
import cpp from "highlight.js/lib/languages/cpp";
import plaintext from "highlight.js/lib/languages/plaintext";
import java from "highlight.js/lib/languages/java";
import golang from "highlight.js/lib/languages/go";

import "../styles/globals.scss";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("java", java);
hljs.registerLanguage("go", golang);

function MyApp({ Component, pageProps }) {
  useNProgress();

  return <Component {...pageProps} />;
}

export default MyApp;
