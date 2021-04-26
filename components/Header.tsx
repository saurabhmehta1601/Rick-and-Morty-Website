import * as React from 'react'
import Image from "next/image"


export default function Header(){
    return (<header className=" bg-gray-800 flex items-center px-8  py-4">
    
      <div className=""
      data-testid="site-logo">
          <Image src="/assets/site-logo.jpg"
          className="rounded-full" 
          width={120} height={120}/>
      </div>
      <div 
      className="text-6xl inline-block mx-auto   font-black text-center text-gray-200 p-4"
      data-testid="header-title"
      >
          Rick And Morty
      </div>

    </header>)
}