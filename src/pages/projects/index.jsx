import DivideLine from "@/components/DivideLine";
import ProjectCard from "@/components/ProjectCard";
import siteMetadata from "@/data/siteMetaData";
import Head from "next/head";
import React from "react";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Anurag Band | My Projects</title>
        <meta
          name="description"
          content="Anurag Band | My Projects"
        />
      </Head>
      <section
        id="about"
        className="min-h-[92vh] flex flex-col bg-primary-bg-color text-primary-text-color space-y-10 pt-24"
      >
        <div className="w-full h-[12vh] flex flex-col items-center justify-center space-y-4">
          <h2 className="font-mainHeading font-medium text-2xl tracking-widest mt-24">
            Projects I&#39;ve worked on
          </h2>
          <hr className="border border-b-4 border-b-teal-500 w-14" />
          <p className="text-lg text-slate-400 font-medium">
            These are some of the projects that I&#39;m most proud of. I&#39;ve
            built them to learn new technologies, or to solve a problem that
            I&#39;ve encountered.
          </p>
          <DivideLine />
        </div>
        <div className="flex flex-col container mx-auto px-5 xl:px-10 py-5 xl:py-14 w-full mt-20">
          {siteMetadata.ProjectsData.map((proj) => (
            <ProjectCard
              key={proj.srNo}
              name={proj.name}
              description={proj.description}
              imageUrl={proj.imageUrl}
              tools={proj.tools}
              repoLink={proj.repoLink}
              deployedLink={proj.deployedLink}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
