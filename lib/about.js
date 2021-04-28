import axios from "axios";
import { BACKEND_URL } from "../config.json";

// Use in production
// export async function getAboutData() {
//   const response = await axios.post(`${BACKEND_URL}/graphql`, {
//     query: `query {
//       aboutMe {
//         Name
//         Description
//         ProfileImage {
//           url
//         }
//       }
//     }`,
//   });
//   return response.data.data.aboutMe;
// }

export async function getAboutData() {
  return {
    Name: "Sundeep Chand",
    Description: `Hello All! I'm Sundeep Chand`,
    ProfileImage: {
      url: "/images/pp-small.jpeg",
    },
  };
}
