// import axios from "axios";
// import { BACKEND_URL } from "../config.json";

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
    Description: `Hello World!👋 I'm Sundeep Chand, currently a Computer Engineering student at Delhi Technological University. I am a full-stack web-developer and I am skilled in MERN(⚛) stack development. I love contributing to open-source and have contributed to projects like p5.js-Web-Editor project and EOS Design System. Apart from that I am also skilled in C++(🚀) and Python(🐍) programming languages. With this blog my aim is to share my web dev journey. So stay tuned!😉`,
    ProfileImage: {
      url: "/images/pp-small.jpeg",
    },
  };
}
