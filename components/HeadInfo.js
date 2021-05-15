import Image from "next/image";
import styles from "../styles/components/HeadInfo.module.scss";

export default function HeadInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>Hello World!!</h1>
        <p>
          Welcome to my blogs. I am extremely excited to present before you my
          tech blogs. If you are passionate about development and programming,
          you are just at the right place. Just scroll down.
        </p>
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
