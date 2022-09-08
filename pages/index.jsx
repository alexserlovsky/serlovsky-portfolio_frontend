import Head from 'next/head'
import React from 'react'
import { createGlobalStyle  } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    background-image: linear-gradient(0deg, #FFB52E, #FFA500);
    background-repeat: no-repeat;
    min-height:100vh;
  }
`;
export default function Home() {
  return (
    <div>
      <Head>
        <title>Serlovsky Portfolio</title>
        <meta name="description" content="Serlovsky Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1></h1>
      <GlobalStyle/>
    </div>
  )
}
