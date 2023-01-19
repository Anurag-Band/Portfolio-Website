import siteMetadata from "@/data/siteMetaData";
import Head from "next/head";
import React from "react";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Anurag Band | My Resume</title>
        <meta
          name="description"
          content="Anurag Band | My Resume"
        />
      </Head>
      <main className="h-[90vh] w-full container mx-auto">
        <iframe
          src={
            siteMetadata.resumeLink
          }
          width={"100%"}
          height={"100%"}
        />
      </main>
    </>
  );
};

export default Resume;
