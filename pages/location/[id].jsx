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


export async function getServerSideProps({params}){

    const res = await axios.get(`https://rickandmortyapi.com/api/location/${params.id}`)
    return {
        props:{ location : res.data }
    }
}

