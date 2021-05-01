import { useEffect, useState } from "react";
import axios from "axios";
import HeartUnchecked from "../assets/icons/Heart_unchecked.svg";
import HeartChecked from "../assets/icons/Heart_checked.svg";
import styles from "../styles/components/LikeButton.module.scss";

let cancelToken = null;
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

  const toggleLikes = async () => {
    if (cancelToken) {
      cancelToken.cancel("Operation cancelled");
    }
    let delta = 0;
    const prevState = {
      updatedLikes,
      liked,
    };
    if (liked) {
      setLikes(updatedLikes - 1);
      delta = -1;
    } else {
      setLikes(updatedLikes + 1);
      delta = 1;
    }
    setLiked(!liked);
    cancelToken = axios.CancelToken.source();
    try {
      const response = await axios.post(
        `https://sundeep-blogs.herokuapp.com/graphql`,
        {
          query: `mutation {
            updateArticle(input: {
              where: {
                id: "${id}"
              },
              data: {
                likes: ${updatedLikes + delta}
              }
            }) {
              article {
                id
                likes
              }
            }
          }`,
        },
        {
          cancelToken: cancelToken.token,
        }
      );
      if (response.data.errors) {
        throw error;
      }
      window.localStorage.setItem(postId, JSON.stringify({ liked: !liked }));
    } catch (error) {
      // Rollback
      console.log("Unable to update likes");
      setLikes(prevState.updatedLikes);
      setLiked(prevState.liked);
      window.localStorage.setItem(
        postId,
        JSON.stringify({ liked: prevState.liked })
      );
      cancelToken = null;
    }
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
