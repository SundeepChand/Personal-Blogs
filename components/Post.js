import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import Button from "./Button";
import styles from "../styles/components/Post.module.scss";

export default function Post({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {!post.headerImageUrl && post.headerImage && (
          <Image
            src={post.headerImage.url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        )}
        {post.headerImageUrl && (
          <Image
            src={post.headerImageUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.meta}>
          <p className={styles.authorName}>By {post.author.name}</p>
          <div>
            <p className={styles.date}>
              {format(new Date(post.createdAt), "dd MMM yyyy")}
            </p>
          </div>
        </div>
        <p className={styles.postDescription}>{slice(post.description)}</p>
      </div>
      <div className={styles.buttonDiv}>
        <Link href={`/post/${post.id}`}>
          <a>
            <Button>Read More ➞</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}

const slice = (text, length = 60) => {
  // Function to slice the passed text to a certain length
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
};
