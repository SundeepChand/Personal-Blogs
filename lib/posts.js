import { mockPosts } from "./data";

export async function getSortedPosts() {
  return mockPosts;
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
  return mockPosts[id - 1];
}
