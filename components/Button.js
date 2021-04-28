import styles from "../styles/components/Button.module.scss";

export default function Button({ children }) {
  return <button className={styles.container}>{children}</button>;
}
