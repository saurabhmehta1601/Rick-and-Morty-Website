import * as React from 'react'
import Link from 'next/link'

function Card(props) {
    return (
        <div className=" shadow-xl hover:shadow-2xl  px-16 py-24 inline-block rounded-lg border-b-4 border-blue-400
        text-3xl
        ">
        <Link href={props.to}>
        {props.title}
        </Link>
        </div>
    )
}

export default Card
