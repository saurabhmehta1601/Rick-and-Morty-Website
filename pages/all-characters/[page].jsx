import * as React from 'react'
import Head from "next/head"
import Grid from "../../components/Grid"
import axios from 'axios'
import NavBtns from "../../components/NavBtns"

export default function Characters ({data,pageNumber}){
    return <>
    <Head>
        <title>Characters | Rick And Morty</title>
    </Head>
    <main className="my-4 container relative">
        <p className="text-right text-lg ">Total characters : {data.info.count} </p>
    <div className="mt-12">
    </div>
        <Grid data={data}  />

   <NavBtns
   noNextPage={pageNumber >=34 }
   noPrevPage={pageNumber <=1} 
   nextPageLink={`/all-characters/${pageNumber+1}`} 
   prevPageLink={`/all-characters/${pageNumber-1}`}
   />  
    </main>
    </>
}


export async function getServerSideProps(context){
     const pageNumber =  context.params.page || 1
     const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)

     return {
         props:{ data : res.data ,pageNumber:parseInt(pageNumber)}
     }
}
