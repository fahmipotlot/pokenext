import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Pokenext | Pokemon List using NextJS</title>
        <meta name="description" content="Pokenext | Pokemon List using NextJS" />
        <meta name="author" content="Fahmi Amiruddin Nafi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  )
}
