import DivideLine from "@/components/DivideLine";
import ExperienceCard from "@/components/ExperienceCard";
import siteMetadata from "@/data/siteMetaData";
import Head from "next/head";
import React from "react";

const Experience = () => {
  return (
    <>
      <Head>
        <title>Anurag Band | My Experience</title>
        <meta
          name="description"
          content="Anurag Band | My Experience"
        />
      </Head>
      <section className="min-h-[92vh] flex flex-col bg-primary-bg-color text-primary-text-color space-y-6">
        <div className="w-full h-[12vh] flex flex-col items-center justify-center space-y-4 mt-10">
          <h2 className="font-mainHeading font-medium text-4xl tracking-widest">
            Work Experience
          </h2>
          <hr className="border border-b-4 border-b-teal-500 w-14" />
          <p className="text-lg text-slate-400 font-medium">
            Here&#39;s a brief rundown of my most recent experiences.
          </p>
        </div>
        <DivideLine />
        <div className="flex flex-col container mx-auto px-5 xl:px-28 w-full">
          {siteMetadata.experienceData.map((exp) => (
            <ExperienceCard
              key={exp.srNo}
              companyName={exp.companyName}
              jobTitle={exp.jobTitle}
              logoUrl={exp.logoUrl}
              companyUrl={exp.companyUrl}
              startDate={exp.startDate}
              endDate={exp.endDate}
              workSummery={exp.workSummery}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
