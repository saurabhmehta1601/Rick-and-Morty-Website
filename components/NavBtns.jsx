import Button from "./Button"
import Link from "next/link"
import * as React from 'react'

function NavBtns({nextPageLink,prevPageLink,noNextPage,noPrevPage}) {
    return (
        <div className="w-10/12 flex  mx-auto mt-16">
        {
            !noPrevPage &&
            <Button link={prevPageLink} text="Prev" /> 
        }

        {
            !noNextPage &&
            <Button link={nextPageLink} side="left" text="Next" /> 
        }

      </div>
    )
}

export default NavBtns

