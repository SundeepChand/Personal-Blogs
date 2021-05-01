import { mockPosts } from "./data";
import { getAllPostsSortedByDate } from "./services";

export async function getSortedPosts() {
  const articles = await getAllPostsSortedByDate();
  return articles;
}

export async function getAllPostIds() {
  return mockPosts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
}

export async function getPostById(id) {
  return mockPosts.find((post) => post.id === id);
}
