import axios from 'axios'
import * as React from 'react'
import CharacterCard from '../../components/CharacterCard'

export default function Character({character}){
    React.useEffect(()=>{
        document.title= `${character.name} | Rick And Morty`
    },[])
    return <>
    <CharacterCard character={character} />
    </>
}


export async function getServerSideProps({params}){

    const res = await axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
    return {
        props:{ character : res.data }
    }
}

