import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Linguisto</title>
    </Head>

    <h1 className="text-3xl font-bold underline">Linguisto</h1>
    
    <Link href="/login">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Login</button>
    </Link>

    <Link href="/signup">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Sign Up</button>
    </Link>
    </>
  )
}
