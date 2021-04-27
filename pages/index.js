import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Post</title>
      </Head>

      <Header imgSrc="/images/hero-home.jpg">
        Photo by{" "}
        <a
          href="https://unsplash.com/@bertsz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
        >
          bert brrr
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/s/photos/network?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
        >
          Unsplash
        </a>
      </Header>

      <div style={{ position: "relative" }}>
        <h1>Home</h1>
      </div>
    </Layout>
  );
}
