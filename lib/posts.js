import {
  getAllPostsSortedByDate,
  getPostIds,
  getAPostById,
} from "./services/posts";

export async function getSortedPosts() {
  const articles = await getAllPostsSortedByDate();
  return articles;
}

export async function getAllPostIds() {
  const posts = await getPostIds();
  return posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}

export async function getPostById(id) {
  const post = await getAPostById(id);
  return post;
}
