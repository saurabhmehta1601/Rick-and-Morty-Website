import * as React from 'react'
import Header from "../components/Header"
import Card from "../components/Card"
import Head from "next/head"

 function Index (){ 
  return (
    <>
      <Head >
        <title>Rick And Morty</title>
      </Head>

      <Header />

      <main className="flex mt-16 container justify-around flex-wrap">
    <Card title="Characters"></Card>
    <Card title="Locations"></Card>
    <Card title="Episodes"></Card>
      </main>
    </>
  );
}

export default Index