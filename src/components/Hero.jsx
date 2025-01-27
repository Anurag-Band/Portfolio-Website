import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import DivideLine from "./DivideLine";
import Link from "next/link";
import siteMetadata from "@/data/siteMetaData";
import Head from "next/head";

const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Head>
        <title>Anurag Band | Full Stack Developer</title>
        <meta
          name="description"
          content="Anurag Band | Full Stack Developer | Personal Portfolio Website"
        />
      </Head>
      <div className="flex flex-col items-start justify-center container mx-auto px-5 lg:px-32 space-y-6">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl w-full lg:w-[43rem] font-semibold md:font-bold break-words">
          Full Stack Developer, amateur Audiophile 🎧️
        </h2>
        <p className="sm:text-lg text-slate-400 font-medium break-words">
          Hii, I&#39;m Anurag, a web developer based in INDIA 🇮🇳, Currently
          Focused in learning new Technologies <br /> & Contributing to{" "}
          <span className="text-green-500 text-xl font-semibold">
            OPEN SOURCE
          </span>
          , Created this to share my life Insigths... I hope you like it!
        </p>
        <div className="flex items-center space-x-6">
          <Link
            href={siteMetadata.socials.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsGithub className="text-xl" />
          </Link>
          <Link
            href={siteMetadata.socials.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsLinkedin className="text-xl" />
          </Link>
          <Link
            href={siteMetadata.socials.twitter}
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsTwitter className="text-xl" />
          </Link>
          <Link
            href={siteMetadata.socials.instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsInstagram className="text-xl" />
          </Link>
        </div>
        <DivideLine />
      </div>
    </div>
  );
};

export default Hero;
