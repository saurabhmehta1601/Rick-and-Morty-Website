import * as React from 'react'

export  default function CharacterCard({character}){
return <>
<div className="text-3xl mt-6 text-center">Character</div>
<div className="shadow-2xl rounded-lg mx-auto w-10/12 bg-gray-100  mt-16 mb-24">
   
    <div className="mt-4 flex">
        <div >
        <img
        className=" h-full w-8/12 rounded-l-lg"
        src={character.image} 
        alt={character.name} />
        </div>
        <div className=" flex flex-col justify-center  ">
            <p><b>Name</b> : <span>{character.name}</span></p>
            <p><b>Status</b> : {character.status}</p>
            <p><b>Species</b> : {character.species}</p>
            {character.type && <p><b>Type</b> : {character.type}</p>}
            <p><b>Gender</b> : {character.gender}</p>
        </div>
    </div>
</div>
</>
}