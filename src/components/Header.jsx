import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import MobileNavbar from "./MobileNavbar";
import siteMetadata from "@/data/siteMetaData";

const Header = () => {
  return (
    <header
      className={`bg-primary-bg-color flex items-center px-10 py-1 fixed top-0 w-full z-50`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Left Section */}
        <Link
          href={"/"}
          className="flex items-center space-x-5"
        >
          <Image
            src={siteMetadata.profilePicLink}
            alt="Anurag Band"
            width={50}
            height={50}
          />
          <p className="text-slate-50 text-2xl font-mainHeading tracking-widest hidden lg:block">
            ANURAG BAND
          </p>
        </Link>
        {/* Right Section */}
        <NavMenu />
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Header;
