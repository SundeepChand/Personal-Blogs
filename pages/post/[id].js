import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostById } from "../../lib/posts";

export default function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible id vaues.
  const allIds = await getAllPostIds();
  return {
    paths: allIds,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch the individual blog post.
  const postData = await getPostById(params.id);
  return {
    props: {
      post: postData,
    },
  };
}
