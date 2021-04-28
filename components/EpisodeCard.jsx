import * as React from 'react'

export  default function EpisodeCard({episode}){
return <>
<div className="text-3xl mt-6 text-center">Episode</div>
<div className="shadow-2xl rounded-lg mx-auto w-10/12 bg-gray-100 mt-4">
        <div className="mt-24 mb-32 py-4 pl-24">
            <p><b>Name</b> : <span>{episode.name}</span></p>
            <p><b>Air Date</b> : {episode.air_date}</p>
            <p><b>Episode</b> : {episode.episode}</p>
        </div>
</div>
</>
}