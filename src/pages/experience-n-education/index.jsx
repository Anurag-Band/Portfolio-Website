import DivideLine from "@/components/DivideLine";
import EducationCard from "@/components/EducationCard";
import ExperienceCard from "@/components/ExperienceCard";
import siteMetadata from "@/data/siteMetaData";
import Head from "next/head";
import React from "react";
import ScrollDownIcon from "../../../public/assets/mouse-scroll.svg";
import Image from "next/image";

const ExperienceNEducation = () => {
  return (
    <>
      <Head>
        <title>My Experience & Education</title>
        <meta
          name="description"
          content="Anurag Band | My Experience"
        />
      </Head>
      {/* Experience Section */}
      <section className="min-h-[90vh] flex flex-col bg-primary-bg-color text-primary-text-color space-y-6">
        <div className="w-full h-[12vh] flex flex-col items-center justify-center space-y-4 mt-20">
          <h2 className="font-mainHeading font-medium text-4xl tracking-widest">
            Work Experience
          </h2>
          <hr className="border border-b-4 border-b-teal-500 w-14" />
          <p className="text-lg md:text-2xl text-teal-500 font-medium">
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
        <div className="w-full container mx-auto flex flex-col items-center justify-center">
          <h3 className="font-semibold text-xl">
            Scroll Down for Education
            <Image
              src={ScrollDownIcon}
              alt="Scroll Down"
              className="ml-10"
              width={180}
              height={200}
            />
          </h3>
        </div>
      </section>
      {/* Education Section */}
      <section className="min-h-[92vh] flex flex-col bg-primary-bg-color text-primary-text-color space-y-6">
        <div className="w-full h-[12vh] flex flex-col items-center justify-center space-y-4 mt-10">
          <h2 className="font-mainHeading font-medium text-4xl tracking-widest">
            Education
          </h2>
          <hr className="border border-b-4 border-b-teal-500 w-14" />
          <p className="text-lg md:text-2xl text-teal-500 font-medium">
            Here&#39;s a brief rundown of my Education Background.
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
              startDate={edu.startDate}
              endDate={edu.endDate}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ExperienceNEducation;
