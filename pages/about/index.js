import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import ProfileImage from "../../components/ProfileImage";
import AboutInfo from "../../components/AboutInfo";
import { getAboutData } from "../../lib/about";
import { wavePattern } from "../../assets/patterns/wave";
import styles from "../../styles/pages/About.page.module.scss";

export default function About({ data }) {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Sundeep Chand" />
        <meta property="og:title" content="About Me | Sundeep Chand" />
        <meta property="og:url" content="https://www.sundeep.codes/about" />
      </Head>

      {/*<HeaderImage imgSrc="/images/hero-about.jpg" alt="Plasma bulb" />*/}
      <Header pattern={wavePattern} />
      <main className={styles.container}>
        <div className={styles.aboutContainer}>
          <ProfileImage image={data.ProfileImage} alt="Profile Picture" />
          <AboutInfo user={data} />
        </div>
        <div className={styles.illustration}>
          <Image
            src="/images/illustrations/working_from_anywhere.svg"
            width={768}
            height={660}
            layout="responsive"
          />
        </div>
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
