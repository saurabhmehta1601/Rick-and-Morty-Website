import * as React from 'react'
import Link from "next/link"

function GridItem({id,name}) {
    return (
        <div className="bg-blue-600  text-center px-2 py-1 text-xl text-white mx-4 my-2 rounded">
            <Link href={`/character/${id}`}>
             {name}
            </Link>
        </div>
    )
}

export default GridItem
