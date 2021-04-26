import * as React from 'react'
import Header from "../components/Header"
import Card from "../components/Card"
import Head from "next/head"

 function Index (){ 
  return (
    <>
      <Head >
        <title> Home | Rick And Morty  </title>
      </Head>

      <main className="w-9/12 mx-auto flex mt-32 container justify-around flex-wrap">
    <Card title="Characters" to="/characters"></Card>
    <Card title="Locations" to="/locations"></Card>
    <Card title="Episodes" to="/episodes"></Card>
      </main>
      
    </>
  );
}

export default Index