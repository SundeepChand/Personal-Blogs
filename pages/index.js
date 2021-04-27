import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Post</title>
      </Head>

      <Header imgSrc='/images/home-hero.jpg'>
        Photo by{' '}
        <a
          href="https://unsplash.com/@donramxn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
        >
          Ramón Salinero
        </a>{' '}
        on{' '}
        <a
          href="https://unsplash.com/s/photos/technology?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
        >
          Unsplash
        </a>
      </Header>

      <div style={{position: 'relative'}}>
        <h1>Home</h1>
      </div>
    </Layout>
  )
}
