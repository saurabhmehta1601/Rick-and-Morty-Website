import * as React from 'react'

function GridItem({name}) {
    return (
        <div className="bg-blue-600 w-1/12 text-center p-2 text-xl text-white mx-4 my-2 rounded">
            {name}
        </div>
    )
}

export default GridItem
