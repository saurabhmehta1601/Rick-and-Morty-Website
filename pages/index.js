import Card from "../components/card"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image" 

export default function Home() {
  return (<>
    <Head>
      <title>Welcome to nextjs</title>
      <meta name="keyword" content="frontend,next js" />
    </Head>

      <Link href="/home">
      <a className=" text-center block p-4 text-2xl">Welcome to <span className= "text-blue-500">Nextjs</span></a>
      </Link>

    <div className="container bg-red-300 mt-4 mx-auto rounded shadow-lg p-4 text-center">
     <p className=" text-2xl ">Hellow from tailwind</p>
      <Image 
      width={1000}
      height={300}
      className="rounded-lg " src="/assets/wave.svg" alt="" />
    </div>
    <Card />
    <Card />
    <Card />
    <Card />
      
    
    </>
      )
}
