import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <div className={styles.logo}>
          <h1>Blogs</h1>
        </div>
      </Link>

      <div className={styles.navmenu}>
        {/*
          <div className={styles.btnNav}>
            <a>Search</a>
          </div>
        */}
        <Link href="/about">
          <div className={styles.btnNav}>
            <a>
              <p>About Me</p>
            </a>
          </div>
        </Link>
      </div>
    </nav>
  );
}
