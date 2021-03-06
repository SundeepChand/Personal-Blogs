import axios from "axios";

export async function getAboutInfo() {
  try {
    const response = await axios.post(`${process.env.BACKEND_URL}/graphql`, {
      query: `query {
        aboutMe {
          Name
          Description
          ProfileImage {
            url
          }
        }
      }`,
    });

    return response.data.data.aboutMe;
  } catch (error) {
    console.log(error);
  }
}
