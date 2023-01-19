import SkillCard from "@/components/SkillCard";
import Head from "next/head";
import React from "react";
import HtmlIcon from "@/../public/assets/skills-icons/html-5.png";
import CssIcon from "@/../public/assets/skills-icons/css-3.png";
import JsIcon from "@/../public/assets/skills-icons/js.png";
import TsIcon from "@/../public/assets/skills-icons/typescript.png";
import ReactIcon from "@/../public/assets/skills-icons/react.png";
import MuiIcon from "@/../public/assets/skills-icons/material-ui.png";
import TailwindIcon from "@/../public/assets/skills-icons/tailwind-css-icon.png";
import ReduxIcon from "@/../public/assets/skills-icons/redux.png";
import NodeJsIcon from "@/../public/assets/skills-icons/nodejs.png";
import ExpressJsIcon from "@/../public/assets/skills-icons/express-js.png";
import MongodbIcon from "@/../public/assets/skills-icons/mongodb.png";
import FirebaseIcon from "@/../public/assets/skills-icons/firebase.png";
import LinuxIcon from "@/../public/assets/skills-icons/linux.png";
import DockerIcon from "@/../public/assets/skills-icons/docker.png";
import GitIcon from "@/../public/assets/skills-icons/git.png";
import GitHubIcon from "@/../public/assets/skills-icons/github.png";
import GitLabIcon from "@/../public/assets/skills-icons/gitlab.png";
import JavaIcon from "@/../public/assets/skills-icons/java.png";
import PythonIcon from "@/../public/assets/skills-icons/python.png";


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
        className="min-h-[95vh] flex flex-col bg-slate-100 space-y-16 pb-10"
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
        <div className="flex flex-col space-y-8">
          {/* Frontend */}
          <div className="flex flex-col w-full space-y-3">
            <div className="w-full h-[2vh] flex flex-col items-center justify-center">
              <h3 className="font-medium text-2xl tracking-widest">Frontend</h3>
            </div>
            <div className="flex items-center justify-evenly flex-wrap space-x-8 container mx-auto w-full">
              <SkillCard
                name={"HTML"}
                icon={HtmlIcon}
              />
              <SkillCard
                name={"CSS"}
                icon={CssIcon}
              />
              <SkillCard
                name={"JavaScript"}
                icon={JsIcon}
              />
              <SkillCard
                name={"TypeScript"}
                icon={TsIcon}
              />
              <SkillCard
                name={"React.JS"}
                icon={ReactIcon}
              />
              <SkillCard
                name={"Material UI"}
                icon={MuiIcon}
              />
              <SkillCard
                name={"Tailwind CSS"}
                icon={TailwindIcon}
              />
              <SkillCard
                name={"Redux"}
                icon={ReduxIcon}
              />
            </div>
          </div>
          {/* Backend */}
          <div className="flex flex-col w-full space-y-3">
            <div className="w-full h-[2vh] flex flex-col items-center justify-center">
              <h3 className="font-medium text-2xl tracking-widest">Backend</h3>
            </div>
            <div className="flex items-center justify-evenly flex-wrap space-x-8 container mx-auto w-full">
              <SkillCard
                name={"Node.JS"}
                icon={NodeJsIcon}
              />
              <SkillCard
                name={"Express.JS"}
                icon={ExpressJsIcon}
              />
              <SkillCard
                name={"MongoDb"}
                icon={MongodbIcon}
              />
              <SkillCard
                name={"Firebase"}
                icon={FirebaseIcon}
              />
            </div>
          </div>
          {/* Tools */}
          <div className="flex flex-col w-full space-y-3">
            <div className="w-full h-[2vh] flex flex-col items-center justify-center">
              <h3 className="font-medium text-2xl tracking-widest">Tools</h3>
            </div>
            <div className="flex items-center justify-evenly flex-wrap space-x-8 container mx-auto w-full">
              <SkillCard
                name={"Linux"}
                icon={LinuxIcon}
              />
              <SkillCard
                name={"Docker"}
                icon={DockerIcon}
              />
              <SkillCard
                name={"Git"}
                icon={GitIcon}
              />
              <SkillCard
                name={"GitHub"}
                icon={GitHubIcon}
              />
              <SkillCard
                name={"Gitlab"}
                icon={GitLabIcon}
              />
            </div>
          </div>
          {/* Familier Languages */}
          <div className="flex flex-col w-full space-y-3">
            <div className="w-full h-[2vh] flex flex-col items-center justify-center">
              <h3 className="font-medium text-2xl tracking-widest">Tools</h3>
            </div>
            <div className="flex items-center justify-evenly flex-wrap space-x-8 container mx-auto w-full">
              <SkillCard
                name={"Java"}
                icon={JavaIcon}
              />
              <SkillCard
                name={"Python"}
                icon={PythonIcon}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
