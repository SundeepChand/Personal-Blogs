import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import HeadInfo from "../components/HeadInfo";
import PostLayout from "../components/PostsLayout";
import { getSortedPosts } from "../lib/posts";
import { wavePattern } from "../assets/patterns/wave";
import { getHomeData } from "../lib/home";

export default function Home({ posts, homeInfo }) {
  return (
    <Layout home>
      <Head>
        <title>Sundeep's blogs | Home</title>
        <meta
          name="description"
          content="Hi There! I'm Sundeep, a software engineer. Welcome to my personal blogs"
        />
      </Head>
      <Header pattern={wavePattern} />
      <HeadInfo info={homeInfo} />
      <PostLayout posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  // Get all posts and home description
  const posts = await getSortedPosts();
  const homeInfo = await getHomeData();
  return {
    props: {
      posts,
      homeInfo,
    },
  };
}
