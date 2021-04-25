import * as React from 'react'

function Card(props) {
    return (
        <div className=" shadow-xl px-16 py-24 inline-block rounded-lg border-b-4 border-blue-400
        text-3xl
        ">
            {props.title}
        </div>
    )
}

export default Card
