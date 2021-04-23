import Link from "next/link"
import Head from "next/head"

export default function Home(){
    <Head>
        <title> Home </title>
    </Head>
   return <><p className='text-center text-4xl text-red-400'>
    This is home </p>
    <Link href="/">
    <button className="btn bg-red-400 px-4 py-2 relative rounded left-40 focus:outline-none  ">
    Go to home 
    </button>
    </Link>
    </>
}