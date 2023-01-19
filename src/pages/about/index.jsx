import Image from "next/image";
import React from "react";
import ProfilePic from "../../../public/assets/about-pic.jpg";
import Head from "next/head";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import siteMetadata from "@/data/siteMetaData";

const CustomLink = ({ name, href }) => {
  return (
    <Link
      className="cursor-pointer text-xl font-medium text-orange-500 hover:text-teal-500"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {name}
    </Link>
  );
};

const About = () => {
  return (
    <>
      <Head>
        <title>Anurag Band | About ME</title>
        <meta
          name="description"
          content="Anurag Band | About ME"
        />
      </Head>
      <section
        id="about"
        className="min-h-[92vh] flex flex-col bg-slate-100 space-y-10"
      >
        <div className="w-full h-[12vh] flex flex-col items-center justify-center space-y-4">
          <h2 className="font-mainHeading font-medium text-4xl tracking-widest mt-24">
            ABOUT ME
          </h2>
          <hr className="border border-b-4 border-b-teal-500 w-14" />
          <p className="font-mainHeading text-2xl tracking-widest uppercase p-5 font-medium text-teal-500">
            helping start-ups to grow their product in terms of technology
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row container mx-auto px-5 xl:px-28 py-5 xl:py-14 w-full font-handwriting text-xl text-slate-700 tracking-wider break-words">
          {/* Left Section */}
          <div className="w-full mt-5 md:mt-0 md:w-1/2 space-y-8">
            <h3>Let you Know About Me,</h3>
            <p>
              I am Anurag, a Full Stack Developer, creative coder, and
              self-proclaimed designer who specializes in Full Stack
              Development. My mission is to translate user-focussed designs into
              pixel-perfect websites or applications that run blazing fast.
            </p>
            <p>
              I&#39;m currently working as a full stack developer intern at{" "}
              {
                <CustomLink
                  name={"TruScholar"}
                  href={"https://truscholar.io"}
                />
              }{" "}
              where I help developers to solve Bugs, Implement Features
            </p>
            <p>
              You can Connect with me on{" "}
              {
                <CustomLink
                  name={"Linkedin"}
                  href={siteMetadata.socials.linkedin}
                />
              }{" "}
              where I share all my Life Insights, or you can follow me on{" "}
              {
                <CustomLink
                  name={"Github"}
                  href={siteMetadata.socials.github}
                />
              }
              .
            </p>
            <p>
              I&#39;m open to Job opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don&#39;t hesitate to contact me.
            </p>
          </div>
          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-row md:flex-col">
            {/* Right Upper Section */}
            <Image
              src={ProfilePic}
              alt="Anurag Band"
              width={300}
              height={300}
              className="rounded-lg lg:ml-48"
            />
            {/* Right Lower Section */}
            <div className="flex flex-col justify-center py-14 ml-24 lg:ml-[11.8rem] space-y-6">
              <Link
                className="flex items-center space-x-3 hover:text-emerald-500"
                href={siteMetadata.socials.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <BsGithub className="text-xl" />
                <span className="hidden md:block">Give Star on Github</span>
              </Link>
              <Link
                className="flex items-center space-x-3 hover:text-emerald-500"
                href={siteMetadata.socials.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <BsLinkedin className="text-xl" />
                <span className="hidden md:block">Connect on Linkedin</span>
              </Link>
              <Link
                className="flex items-center space-x-3 hover:text-emerald-500"
                href={siteMetadata.socials.twitter}
                rel="noopener noreferrer"
                target="_blank"
              >
                <BsTwitter className="text-xl" />
                <span className="hidden md:block">Follow on Twitter</span>
              </Link>
              <Link
                className="flex items-center space-x-3 hover:text-emerald-500"
                href={siteMetadata.socials.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                <BsInstagram className="text-xl" />
                <span className="hidden md:block">Follow on Instagram</span>
              </Link>
              <Link
                className="flex items-center space-x-3 hover:text-emerald-500"
                href={`mailto:${siteMetadata.email}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <SiGmail className="text-xl" />
                <span className="hidden md:block">Send mail on Email</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
