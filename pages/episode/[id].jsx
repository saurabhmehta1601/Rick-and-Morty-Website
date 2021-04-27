import axios from 'axios'
import * as React from 'react'
import EpisodeCard from '../../components/EpisodeCard'

export default function Character({episode}){
    React.useEffect(()=>{
        document.title= `${episode.name} | Rick And Morty`
    },[])
    return <>
    <EpisodeCard episode={episode} />
    </>
}


export async function getServerSideProps({params}){

    const res = await axios.get(`https://rickandmortyapi.com/api/episode/${params.id}`)
    return {
        props:{ episode : res.data }
    }
}
