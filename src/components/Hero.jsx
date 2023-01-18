import React from "react";
import Image from "next/image";
import ProfilePic from "../../public/assets/profile-pic.png";
import Link from "next/link";

const Hero = () => {
  return (
    <header>
      {/* Left Section */}
      <Link
        href={"/"}
        className="flex items-center space-x-5"
      >
        <Image
          src={ProfilePic}
          alt="Profile Picture"
        />
        <p className="text-red-500">ANURAG BAND</p>
      </Link>
      {/* Right Section */}
      <nav></nav>
    </header>
  );
};

export default Hero;
