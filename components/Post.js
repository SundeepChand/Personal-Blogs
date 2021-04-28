import Image from "next/image";
import { format } from "date-fns";
import styles from "../styles/components/Post.module.scss";

export default function Post({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={post.imgUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.meta}>
          <p className={styles.authorName}>By {post.author}</p>
          <div>
            <p className={styles.date}>
              {format(new Date(post.date), "dd MMM yyyy")}
            </p>
          </div>
        </div>
        <p className={styles.postDescription}>{slice(post.description)}</p>
      </div>
    </div>
  );
}

const slice = (text, length = 130) => {
  // Function to slice the passed text to a certaine length
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
};
