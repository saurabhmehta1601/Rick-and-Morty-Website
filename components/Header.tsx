import * as React from 'react'
import Image from "next/image"


export default function Header(){
    return (<div className=" bg-gray-800 flex items-center p-8">
    
      <div className=""
      data-testid="site-logo">
          <Image src="/assets/site-logo.jpg"
          className="rounded-full" 
          width={100} height={100}/>
      </div>
      <div 
      className="text-6xl inline-block mx-auto   font-black text-center text-gray-200 p-4"
      data-testid="header-title"
      >
          Rick And Morty
      </div>

    </div>)
}