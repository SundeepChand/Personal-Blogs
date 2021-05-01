import styles from "../styles/components/CommentsSection.module.scss";
import CommentsIcon from "../assets/icons/Comment.svg";

export default function CommentsSection() {
  return (
    <>
      <button className={styles.commentButton}>
        <CommentsIcon width={40} height={35} />
      </button>
    </>
  );
}
