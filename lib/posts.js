import {
  getAllPostsSortedByDate,
  getPostIds,
  getAPostById,
} from "./services/filesystem/posts";

export async function getSortedPosts() {
  const articles = getAllPostsSortedByDate();
  return articles;
}

export async function getAllPostIds() {
  const postIds = getPostIds();
  return postIds.map((id) => {
    return {
      params: {
        id,
      },
    };
  });
}

export async function getPostById(id) {
  const post = await getAPostById(id);
  return post;
}
