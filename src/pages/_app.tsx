import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
