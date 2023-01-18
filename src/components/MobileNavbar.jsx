import siteMetadata from "@/data/siteMetaData";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleMobileMenu = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <div className="lg:hidden relative">
      <div
        onClick={handleMobileMenu}
        className="flex flex-col space-y-2"
      >
        <span
          className={`border border-b-2 border-black w-10 rounded-full transition-all duration-150 ${
            isNavOpen && "rotate-45"
          }`}
        />
        <span
          className={`border border-b-2 border-black w-10 rounded-full transition-all ${
            isNavOpen && "hidden"
          }`}
        />
        <span
          className={`border border-b-2 border-black w-10 rounded-full transition-all duration-150 ${
            isNavOpen && "rotate-[135deg] -translate-y-3"
          }`}
        />
      </div>
      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        {siteMetadata.siteNavLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={() => setIsNavOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
