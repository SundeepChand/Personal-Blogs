import Image from 'next/image'
import styles from '../styles/components/Header.module.scss'

export default function Header({ children, imgSrc }) {
  return (
    <header className={styles.container}>
      <div className={styles.heroImage}>
        <Image
          src={imgSrc}
          alt='Plasma'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </div>

      <div className={styles.caption}>
        {children}
      </div>
    </header>
  )
}
