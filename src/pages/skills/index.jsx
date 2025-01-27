import SkillCard from "@/components/SkillCard";
import Head from "next/head";
import React from "react";
import siteMetadata from "@/data/siteMetaData";

const Skills = () => {
  return (
    <>
      <Head>
        <title>Anurag Band | My Skills</title>
        <meta
          name="description"
          content="Anurag Band | My Skills"
        />
      </Head>
      <section
        id="about"
        className="min-h-[95vh] flex flex-col bg-primary-bg-color text-primary-text-color space-y-16 pb-10"
      >
        <div className="w-full h-[5vh] flex flex-col items-center justify-center space-y-1 mb-8 mt-5">
          <h2 className="font-mainHeading font-medium text-5xl tracking-widest mt-24">
            Skills
          </h2>
          <hr className="border border-b-4 border-b-teal-500 w-14" />
          <p className="font-mainHeading text-3xl tracking-widest uppercase p-5 font-medium text-teal-500">
            WHAT CAN I DO !
          </p>
        </div>
        {/* Skills Section */}
        <div className="flex flex-col space-y-8 w-7/12 mx-auto">
          {siteMetadata.skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col w-full space-y-3"
            >
              <div className="w-full h-[2vh] flex flex-col items-center justify-center">
                <h3 className="font-medium text-lg sm:text-2xl tracking-widest">
                  {skill.skillCategory}
                </h3>
              </div>
              <div className="flex items-center justify-around flex-wrap space-x-4 sm:space-x-8 container mx-auto w-full">
                {skill.skillList.map((skill, index) => (
                  <SkillCard
                    key={index}
                    name={skill.name}
                    icon={skill.iconPath}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
