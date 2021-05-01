import Image from "next/image";
import styles from "../styles/components/ProfileImage.module.scss";

export default function ProfileImage({ image, alt }) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        width={200}
        height={200}
        src={image.url}
        alt={alt}
      />
    </div>
  );
}
