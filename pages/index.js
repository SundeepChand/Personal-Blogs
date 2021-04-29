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
      <Header imgSrc="/images/hero-home.jpg" alt={"Blocks"} />
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
