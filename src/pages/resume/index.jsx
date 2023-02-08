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
      <main className="h-[92vh] bg-card-bg-color w-full">
        <div className="container mx-auto h-full">
          <iframe
            src={siteMetadata.resumeLink}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </main>
    </>
  );
};

export default Resume;
