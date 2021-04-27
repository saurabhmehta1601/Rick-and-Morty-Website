import axios from 'axios'
import * as React from 'react'
import CharacterCard from '../../components/CharacterCard'
import Head from 'next/head'

export default function Character({character}){
    return <>
    <Head>
        <title>{character.name} | Rick And Morty</title>
    </Head>
    <CharacterCard character={character} />
    </>
        
   
}


export async function getStaticProps({params}){

    const res = await axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
    return {
        props:{ character : res.data }
    }
}

export function getStaticPaths(){
    const paths = Array.from(Array(671),(elem,index)=>{
        return {
            params :{ id : toString(index + 1)}
        }
    })
    return {
        paths,
        fallback:true
    }
}