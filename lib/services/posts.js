import axios from "axios";

export async function getAllPostsSortedByDate() {
  try {
    const response = await axios.post(`${process.env.BACKEND_URL}/graphql`, {
      query: `query {
        articles (sort: "createdAt:desc") {
          id
          createdAt
          title
          description
          author {
            name
          }
          headerImage {
            url
          }
          headerImageUrl
        }
      }`,
    });
    return response.data.data.articles;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostIds() {
  try {
    const response = await axios.post(`${process.env.BACKEND_URL}/graphql`, {
      query: `query {
        articles {
          id
        }
      }`,
    });
    return response.data.data.articles;
  } catch (error) {
    console.log(error);
  }
}

export async function getAPostById(id) {
  try {
    const response = await axios.post(`${process.env.BACKEND_URL}/graphql`, {
      query: `query {
        article (id: "${id}") {
          id
          title
          likes
          description
          author {
            name
          }
          createdAt
          headerImageUrl
          headerImage {
            url
          }
          headerImageCaption
          content
        }
      }`,
    });
    return response.data.data.article;
  } catch (error) {
    console.log(error);
  }
}
