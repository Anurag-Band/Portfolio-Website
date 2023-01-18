import About from '@/components/About'
import Hero from '@/components/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Anurag Band | Full Stack Developer</title>
        <meta name="description" content="Anurag Band | Full Stack Developer | Personal Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-100 min-h-screen">
        <Hero />
        <About />
      </main>
    </>
  )
}
