import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Post</title>
      </Head>
      <h1>Home</h1>
    </Layout>
  )
}
