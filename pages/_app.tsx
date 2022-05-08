import React, { useEffect,useState } from 'react'
import '../styles/globals.css'
import '../styles/index.scss'
import { Layout } from '../components'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
