import * as React from 'react'
import Head from "next/head"
import Grid from "../../components/Grid"
import axios from 'axios'
import NavBtns from "../../components/NavBtns"

export default function Episode ({data,pageNumber}){
    return <>
    <Head>
        <title>Episodes | Rick And Morty</title>
    </Head>
    <main className="my-4 container relative">
        <p className="text-right text-lg ">Total Episodes : {data.info.count} </p>
    <div className="mt-12">
    </div>
        <Grid data={data} type="episode"  />

   <NavBtns
   noNextPage={pageNumber >=3 }
   noPrevPage={pageNumber <=1} 
   nextPageLink={`/all-episodes/${pageNumber+1}`} 
   prevPageLink={`/all-episodes/${pageNumber-1}`}
   />  
    </main>
    </>
}


export async function getServerSideProps(context){
     const pageNumber =  context.params.page || 1
     const res = await axios.get(`https://rickandmortyapi.com/api/episode?page=${pageNumber}`)

     return {
         props:{ data : res.data ,pageNumber:parseInt(pageNumber)}
     }
}
