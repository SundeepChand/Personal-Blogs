import { createRef, useEffect, useState } from "react";

import styles from "../styles/components/CommentsSection.module.scss";
import CommentsIcon from "../assets/icons/Comment.svg";

const CommentsThread = ({ commentBox, setCommentSectionOpen }) => {
  return (
    <div className={styles.commentThreadContainer}>
      <div className={styles.commentHeader}>
        <h1>Discussions</h1>
        <span
          onClick={() => {
            setCommentSectionOpen(false);
          }}
        >
          &times;
        </span>
      </div>
      <div ref={commentBox} className={styles.commentsContainer}></div>
    </div>
  );
};

export default function CommentsSection() {
  const [commentSectionOpen, setCommentSectionOpen] = useState(false);

  const commentBox = createRef();
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "SundeepChand/Personal-Blogs");
    script.setAttribute("issue-term", "og:title");
    script.setAttribute("id", "utterances");
    script.setAttribute("label", "thread");
    script.setAttribute("theme", "github-light");
    script.setAttribute("crossorigin", "anonymous");

    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(script);
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }
  });

  return (
    <>
      <button
        className={styles.commentButton}
        onClick={() => {
          setCommentSectionOpen(!commentSectionOpen);
        }}
      >
        <CommentsIcon width={40} height={35} />
      </button>
      {commentSectionOpen && (
        <CommentsThread
          commentBox={commentBox}
          setCommentSectionOpen={setCommentSectionOpen}
        />
      )}
    </>
  );
}
