import DivideLine from "@/components/DivideLine";
import EducationCard from "@/components/EducationCard";
import siteMetadata from "@/data/siteMetaData";
import Head from "next/head";
import React from "react";

const Education = () => {
  return (
    <>
    <Head>
        <title>Anurag Band | My Education</title>
        <meta
          name="description"
          content="Anurag Band | My Education"
        />
      </Head>
      <section className="min-h-[92vh] flex flex-col bg-primary-bg-color text-primary-text-color space-y-6">
        <div className="w-full h-[12vh] flex flex-col items-center justify-center space-y-4 mt-10">
          <h2 className="font-mainHeading font-medium text-4xl tracking-widest">
            Education
          </h2>
          <hr className="border border-b-4 border-b-teal-500 w-14" />
          <p className="text-lg text-slate-400 font-medium">
            Here&#39;s a brief rundown of my most recent experiences.
          </p>
        </div>
        <DivideLine />
        <div className="flex flex-col container mx-auto px-5 xl:px-28 w-full">
          {siteMetadata.educationData.map((edu) => (
            <EducationCard
              key={edu.srNo}
              instituteName={edu.instituteName}
              courseName={edu.courseName}
              logoUrl={edu.logoUrl}
              instituteUrl={edu.instituteUrl}
              startYear={edu.startYear}
              endYear={edu.endYear}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
