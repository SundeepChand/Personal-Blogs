import Post from "./Post";
import styles from "../styles/components/PostLayout.module.scss";

export default function PostLayout({ posts }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
