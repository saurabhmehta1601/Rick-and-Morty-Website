import * as React from 'react'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Header from "../components/Header"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return <>
  <Header />
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
