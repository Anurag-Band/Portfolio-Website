import React from "react";
import Image from "next/image";
import ProfilePic from "../../public/assets/profile-pic.png";

const Hero = () => {
  return (
    <section>
      {/* Left Section */}
      <div className="flex items-center space-x-5">
        <Image 
         src={ProfilePic}
         alt="Profile Picture"
        />
        <p className="text-red-500">ANURAG BAND</p>
      </div>
      {/* Right Section */}
      <div>

      </div>
    </section>
  );
};

export default Hero;
