import styles from "../styles/components/AboutInfo.module.scss";

export default function AboutInfo({ user }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.titleText}>About Me</h1>
      </div>
      <div className={styles.description}>
        <p>{user.Description}</p>
      </div>
    </div>
  );
}
