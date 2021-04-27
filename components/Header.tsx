import * as React from 'react'
import Image from "next/image"
import Link from "next/link"


export default function Header(){
    return (<header className=" bg-gray-800 flex items-center px-8  py-4">
        
      <div 
      data-testid="site-logo">
          <Link href="/">
          <Image src="/assets/site-logo.jpg"
          className="rounded-full" 
          width={120} height={120}/>
          </Link>
      </div>
      <div 
      className="text-6xl inline-block mx-auto   font-black text-center text-gray-200 p-4"
      data-testid="header-title"
      >
          Rick And Morty
      </div>

    </header>)
}