import styles from "../styles/components/AboutInfo.module.scss";

export default function AboutInfo({ user }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className={styles.titleText}>{user.Name}</h2>
      </div>
      <div className={styles.description}>
        <p>{user.Description}</p>
      </div>
    </div>
  );
}
