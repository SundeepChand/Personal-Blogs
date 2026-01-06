import Image from "next/image";
import styles from "../styles/components/HeaderImage.module.scss";

export default function HeaderImage({ children, imgSrc, alt }) {
  return (
    <header className={styles.container}>
      <div className={styles.heroImage}>
        <Image
          src={imgSrc}
          alt={alt}
          loading="lazy"
          fill
          style={{ objectPosition: 'center center', objectFit: 'cover' }}
        />
      </div>

      <div className={styles.caption}>{children}</div>
    </header>
  );
}
