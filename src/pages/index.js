import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anurag Band | Full Stack Developer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="description"
          content="Anurag Band | Full Stack Developer | Personal Portfolio Website"
        />
      </Head>
      <main className="h-screen w-full overflow-hidden">
        <Hero />
      </main>
    </>
  );
}
