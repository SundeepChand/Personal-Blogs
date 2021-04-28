const mockPosts = [
  {
    id: 1,
    title: "Two Forms of Pre-rendering",
    author: "Sundeep Chand",
    date: "2020-01-01",
    time: "15:30",
    category: "database",
    imgUrl:
      "https://images.unsplash.com/photo-1590278458425-6aa3912a48a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",

    description: `How a bug on MySQL is becoming a meme on the internet`,
  },
  {
    id: 2,
    title: "Beautiful picture",
    author: "Sundeep Chand",
    date: "2020-01-02",
    time: "15:30",
    category: "art",
    imgUrl:
      "https://images.unsplash.com/photo-1604253110629-a6b88815ddb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    description: `Description of a beautiful picture`,
  },
  {
    id: 3,
    title: "Two Forms of Pre-rendering",
    author: "Sundeep Chand",
    date: "2020-01-01",
    time: "15:30",
    category: "database",
    imgUrl:
      "https://images.unsplash.com/photo-1590278458425-6aa3912a48a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",

    description: `How a bug on MySQL is becoming a meme on the internet`,
  },
  {
    id: 4,
    title: "Beautiful picture",
    author: "Sundeep Chand",
    date: "2020-01-02",
    time: "15:30",
    category: "art",
    imgUrl:
      "https://images.unsplash.com/photo-1604253110629-a6b88815ddb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    description: `It's the story of a user named **Sundeep Chand** who reported a bug in 2005 on the MySQL [bug report platform](https://bugs.mysql.com/)

    But the thing is that Omer never get an answer. 15 years later, the bug has never been fix and people are starting to make fun out of it. We let you take a look at the conversation [here](https://bugs.mysql.com/bug.php?id=11472), it's pretty funny`,
  },
];

export async function getSortedPosts() {
  return mockPosts;
}
