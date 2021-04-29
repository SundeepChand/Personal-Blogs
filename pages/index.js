import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PostLayout from "../components/PostsLayout";
import { getSortedPosts } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <Header imgSrc="/images/hero-home.jpg" alt={"Blocks"}>
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
      <PostLayout posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = await getSortedPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
