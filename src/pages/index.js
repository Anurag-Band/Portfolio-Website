import Head from 'next/head'
import { Inter } from '@next/font/google'
import Hero from '@/components/Hero'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Anurag Band | Full Stack Developer</title>
        <meta name="description" content="Anurag Band | Full Stack Developer | Personal Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  )
}
