import Head from "next/head";
import Image from "next/image";
import remark from "remark";
import html from "remark-html";
import { format } from "date-fns";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostById } from "../../lib/posts";
import styles from "../../styles/pages/Post.page.module.scss";

export default function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>

      <div className={styles.container}>
        <div>
          <h1>{post.title}</h1>
          <div className={styles.meta}>
            <p>By {post.author.name}</p>
            <p className={styles.separator}>{" ✨ "}</p>
            <p>{format(new Date(post.updatedAt), "dd MMM yyyy")}</p>
          </div>
        </div>
        {post.image && (
          <div>
            <Header imgSrc={post.image.url} />
          </div>
        )}
        <div className={styles.meta}>
          <p className={styles.authorName}></p>
          <div></div>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        ></div>
      </div>
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

async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export async function getStaticProps({ params }) {
  // Fetch the individual blog post.
  const postData = await getPostById(params.id);
  postData.content = await markdownToHtml(postData.content);
  return {
    props: {
      post: postData,
    },
  };
}
