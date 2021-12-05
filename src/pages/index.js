import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daeitto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-secondary max-w-screen-sm mx-auto">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  )
}
