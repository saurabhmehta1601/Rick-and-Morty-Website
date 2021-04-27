import * as React from 'react'

export  default function LocationCard({location}){
return <>
<div className="text-3xl mt-6 text-center">Location</div>
<div className="shadow-2xl rounded-lg mx-auto w-10/12 bg-gray-100 mt-4">
        <div className="  py-4 pl-24">
            <p><b>Name</b> : <span>{location.name}</span></p>
            <p><b>Type</b> : {location.type}</p>
            <p><b>Dimension</b> : {location.dimension}</p>
        </div>
</div>
</>
}