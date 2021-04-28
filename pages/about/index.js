import Head from "next/head";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import ProfileImage from "../../components/ProfileImage";
import AboutInfo from "../../components/AboutInfo";
import { getAboutData } from "../../lib/about";

export default function About({ data }) {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>

      <Header imgSrc="/images/hero-about.jpg"></Header>
      <main>
        <ProfileImage image={data.ProfileImage} />

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
