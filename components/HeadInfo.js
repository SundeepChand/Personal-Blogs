import Image from "next/image";
import styles from "../styles/components/HeadInfo.module.scss";

export default function HeadInfo({ info }) {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.title}>{info.title}</h1>
        <p className={styles.content}>{info.about_blog}</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/illustrations/programming.svg"
          width={768}
          height={460}
          layout="responsive"
        />
      </div>
    </div>
  );
}
