import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className="bg-secondary">
      <Head>
        <title>Daeitto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Main/>

      <footer></footer>
    </div>
  )
}
