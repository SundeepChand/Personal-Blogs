import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/components/Layout.module.scss";

const siteTitle = `Sundeep's Blogs`;

export default function Layout({ children, postPage }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {children}

      <Footer />
      {postPage && <div className={styles.buffer}></div>}
    </div>
  );
}
