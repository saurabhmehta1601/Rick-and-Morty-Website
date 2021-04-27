import axios from 'axios'
import * as React from 'react'
import LocationCard from '../../components/LocationCard'

export default function Location({location}){
    React.useEffect(()=>{
        document.title= `${location.name} | Rick And Morty`
    },[])
    return <>
    <LocationCard location={location} />
    </>
}


export async function getStaticProps({params}){

    const res = await axios.get(`https://rickandmortyapi.com/api/location/${params.id}`)
    return {
        props:{ location : res.data }
    }
}

export function getStaticPaths(){
    const paths = Array.from(Array(108),(elem,index)=>{
        return {
            params :{ id : toString(index + 1)}
        }
    })
    return {
        paths,
        fallback:true
    }
}