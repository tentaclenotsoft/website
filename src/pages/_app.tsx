import React from 'react'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>tentaclesoft</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
