import * as React from 'react'
import Head from "next/head"
import Grid from "../components/Grid"
import axios from 'axios'

export default function Characters ({data}){
    return <>
    <Head>
        <title>Characters | Rick And Morty</title>
    </Head>
    <main className="my-4 container relative">
        <p className="text-right text-lg ">Total characters : {data.info.count} </p>
    <div className="mt-12">
        <Grid />
    </div>  
    </main>
    </>
}


export async function getStaticProps(){
     const res = await axios.get("https://rickandmortyapi.com/api/character")

     return {
         props:{data :res.data}
     }
}