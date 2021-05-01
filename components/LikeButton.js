import { useEffect, useState } from "react";
import axios from "axios";
import HeartUnchecked from "../assets/icons/Heart_unchecked.svg";
import HeartChecked from "../assets/icons/Heart_checked.svg";
import styles from "../styles/components/LikeButton.module.scss";

export default function LikeButton({ postId, likes, id }) {
  const [updatedLikes, setLikes] = useState(null);

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
    const fetchLikes = async () => {
      try {
        const response = await axios.post(
          `https://sundeep-blogs.herokuapp.com/graphql`,
          {
            query: `query {
              article (id: "${id}") {
                likes
              }
            }`,
          }
        );
        setLikes(response.data.data.article.likes);
      } catch (error) {
        console.log(`Unable to fetch likes for ${id}`);
        setLikes(likes);
      }
    };
    fetchLikes();
  }, []);

  const toggleLikes = () => {
    setLiked(!liked);
    window.localStorage.setItem(postId, JSON.stringify({ liked: !liked }));
  };

  return (
    <>
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
      <div className={styles.likesCount}>
        <span>{updatedLikes === null ? likes : updatedLikes}</span>
      </div>
    </>
  );
}
