import { useEffect, useState } from "react";
import HeartUnchecked from "../assets/icons/Heart_unchecked.svg";
import HeartChecked from "../assets/icons/Heart_checked.svg";
import styles from "../styles/components/LikeButton.module.scss";

export default function LikeButton({ postId, likes }) {
  let initialState = false;
  const [liked, setLiked] = useState(initialState);

  useEffect(() => {
    initialState = window.localStorage.getItem(postId);
    if (!initialState) {
      initialState = false;
    } else {
      initialState = JSON.parse(initialState).liked;
    }
    setLiked(initialState);
  }, []);

  const toggleLikes = () => {
    setLiked(!liked);
    window.localStorage.setItem(postId, JSON.stringify({ liked: !liked }));
  };

  return (
    <div className={styles.container}>
      <div>
        <button onClick={toggleLikes} className={styles.likeButton}>
          {!liked ? (
            <HeartUnchecked
              className={styles.heartUnchecked}
              width={40}
              height={35}
            />
          ) : (
            <HeartChecked
              className={styles.heartChecked}
              width={40}
              height={35}
            />
          )}
        </button>
      </div>
      <div className={styles.likesCount}>
        <span>{likes || 0}</span>
      </div>
    </div>
  );
}
