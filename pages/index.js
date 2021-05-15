import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import HeadInfo from "../components/HeadInfo";
import PostLayout from "../components/PostsLayout";
import { getSortedPosts } from "../lib/posts";
import { wavePattern } from "../assets/patterns/wave";

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <Header pattern={wavePattern} />
      <HeadInfo />
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
