import Head from "next/head";
import Layout from "../../components/Layout";
import Header from "../../components/Header";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>

      <Header imgSrc="/images/hero-about.jpg">
        Photo by{" "}
        <a
          href="https://unsplash.com/@donramxn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
        >
          Ramón Salinero
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/s/photos/technology?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
        >
          Unsplash
        </a>
      </Header>
      <div>
        <h1>About Me</h1>
      </div>
    </Layout>
  );
}
