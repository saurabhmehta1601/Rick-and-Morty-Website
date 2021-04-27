import * as React from 'react'
import Head from "next/head"
import Grid from "../../components/Grid"
import axios from 'axios'
import NavBtns from "../../components/NavBtns"

export default function Locations ({data,pageNumber}){
    return <>
    <Head>
        <title>Locations | Rick And Morty</title>
    </Head>
    <main className="my-4 container relative">
        <p className="text-right text-lg ">Total locations : {data.info.count} </p>
    <div className="mt-12">
    </div>
        <Grid data={data} type="location" />

   <NavBtns
   noNextPage={pageNumber >=6 }
   noPrevPage={pageNumber <=1} 
   nextPageLink={`/all-locations/${pageNumber+1}`} 
   prevPageLink={`/all-locations/${pageNumber-1}`}
   />  
    </main>
    </>
}


export async function getServerSideProps(context){
     const pageNumber =  context.params.page || 1
     const res = await axios.get(`https://rickandmortyapi.com/api/location?page=${pageNumber}`)

     return {
         props:{ data : res.data ,pageNumber:parseInt(pageNumber)}
     }
}
