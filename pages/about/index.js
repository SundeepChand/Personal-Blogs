import Head from "next/head";
import Layout from "../../components/Layout";
import HeaderImage from "../../components/HeaderImage";
import ProfileImage from "../../components/ProfileImage";
import AboutInfo from "../../components/AboutInfo";
import { getAboutData } from "../../lib/about";

const mainStyle = { top: "-140px", position: "relative" };

export default function About({ data }) {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>

      <HeaderImage imgSrc="/images/hero-about.jpg" alt="Plasma bulb" />
      <main style={mainStyle}>
        <ProfileImage image={data.ProfileImage} alt="Profile Picture" />

        <AboutInfo user={data} />

        {/*<Projects />*/}
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getAboutData();
  return {
    props: {
      data,
    },
  };
}
