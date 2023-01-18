import React from "react";
import Image from "next/image";
import ProfilePic from "../../public/assets/profile-pic.png";
import Link from "next/link";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="bg-white flex items-center px-10 py-3 fixed top-0 w-full">
      <div className="flex items-center justify-between w-full">
        {/* Left Section */}
        <Link
          href={"/"}
          className="flex items-center space-x-5"
        >
          <Image
            src={ProfilePic}
            alt="Anurag Band"
            width={60}
            height={60}
          />
          <p className="text-slate-600 text-3xl font-mainHeading tracking-wider">ANURAG BAND</p>
        </Link>
        {/* Right Section */}
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
