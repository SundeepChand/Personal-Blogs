import axios from "axios";

export async function getHomeInfo() {
  try {
    const response = await axios.post(`${process.env.BACKEND_URL}/graphql`, {
      query: `query {
        homepage {
          hero {
            title
            about_blog
          }
        }
      }`,
    });

    return response.data.data.homepage;
  } catch (error) {
    console.log(error);
  }
}
