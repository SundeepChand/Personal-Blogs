import axios from "axios";
import { config } from "dotenv";
config();

export async function getAllPostsSortedByDate() {
  try {
    const response = await axios.post(`${process.env.BACKEND_URL}/graphql`, {
      query: `query {
        articles (sort: "updatedAt:desc") {
          id
          updatedAt
          title
          description
          author {
            name
          }
        }
      }`,
    });
    return response.data.data.articles;
  } catch (error) {
    console.log(error);
  }
}
