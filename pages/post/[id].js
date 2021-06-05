import Head from "next/head";
import { useEffect } from "react";
import hljs from "highlight.js";
import remark from "remark";
import html from "remark-html";
import { format } from "date-fns";
import HeaderImage from "../../components/HeaderImage";
import Layout from "../../components/Layout";
import LikeButton from "../../components/LikeButton";
import CommentsSection from "../../components/CommentsSection";
import { getAllPostIds, getPostById } from "../../lib/posts";
import styles from "../../styles/pages/Post.page.module.scss";
import HeaderPlain from "../../components/Header";
import { wavePattern } from "../../assets/patterns/wave";

export default function Post({ post }) {
  useEffect(() => {
    hljs.initHighlighting();
    console.log("Initialise hljs");
  });
  return (
    <Layout postPage>
      <Head>
        <title>{post.title} | Sundeep's blogs</title>
      </Head>

      <HeaderPlain pattern={wavePattern} />

      <div className={styles.container}>
        <div className={styles.likesContainer}>
          <div className={styles.likeButton}>
            <LikeButton postId={post.id} likes={post.likes} id={post.id} />
          </div>
          {/*
          <div className={styles.commentIcon}>
            <CommentsSection />
          </div>
          */}
        </div>

        <div className={styles.contentContainer}>
          <div>
            <div>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.meta}>
                <p>By {post.author.name}</p>
                <p className={styles.separator}>{" 📅 "}</p>
                <p>{format(new Date(post.createdAt), "dd MMM yyyy")}</p>
              </div>
            </div>
            {(post.headerImage || post.headerImageUrl) && (
              <div>
                <HeaderImage
                  imgSrc={post.headerImage?.url ?? post.headerImageUrl}
                  alt={post.headerImageCaption}
                >
                  {post.headerImageCaption}
                </HeaderImage>
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
        </div>
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
  const post = await getPostById(params.id);
  post.content = await markdownToHtml(post.content);
  return {
    props: {
      post: post,
    },
  };
}
