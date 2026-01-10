import Head from "next/head";
import { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import cpp from "highlight.js/lib/languages/cpp";
import java from "highlight.js/lib/languages/java";
import xml from "highlight.js/lib/languages/xml";
import sql from "highlight.js/lib/languages/sql";
import "highlight.js/styles/atom-one-dark.css";
import { remark } from "remark";
import html from "remark-html";
import { format } from "date-fns";
import HeaderImage from "../../components/HeaderImage";
import Layout from "../../components/Layout";
import LikeButton from "../../components/LikeButton";
import CommentsSection from "../../components/CommentsSection";
import { getAllPostIds, getPostById } from "../../lib/posts";
import HeaderPlain from "../../components/Header";
import { wavePattern } from "../../assets/patterns/wave";
import styles from "../../styles/pages/Post.page.module.scss";

hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('java', java);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('sql', sql);

export default function Post({ post }) {
  useEffect(() => {
    hljs.highlightAll();
  }, [post.content]);
  return (
    <Layout postPage>
      <Head>
        <title>{post.title} | Sundeep's blogs</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content={`article:${post.author.name}`} />
        <meta
          property="og:url"
          content={`https://www.sundeep.codes/post/${post.id}`}
        />
        <meta
          property="og:image"
          content={post.headerImage?.url ?? post.headerImageUrl}
        />
      </Head>

      <HeaderPlain pattern={wavePattern} />

      <div className={styles.container}>
        <div className={styles.likesContainer}>
          <div className={styles.likeButton}>
            <LikeButton postId={post.id} likes={post.likes} id={post.id} />
          </div>
          <div className={styles.commentIcon}>
            <CommentsSection />
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div>
            <div>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.meta}>
                <p>By {post.author}</p>
                <p className={styles.separator}>{" 📅 "}</p>
                <p>{format(new Date(post.createdAt), "dd MMM yyyy")}</p>
              </div>
            </div>
            {post.headerImageUrl && (
              <div>
                <HeaderImage
                  imgSrc={post.headerImageUrl}
                  alt={post.headerImageAltText}
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
  const result = await remark().use(html, { sanitize: false }).process(markdown);
  return result.toString();
}

export async function getStaticProps({ params }) {
  // Fetch the individual blog post.
  const post = await getPostById(params.id);
  post.content = await markdownToHtml(post.content);
  console.log(post.content);
  return {
    props: {
      post: post,
    },
  };
}
