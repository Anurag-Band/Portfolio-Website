import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import siteMetadata from '@/data/siteMetaData';

function NavItem({ href, name }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      className={`${
        isActive ? "font-bold text-teal-400" : "font-normal text-gray-200"
      } 'hidden md:inline-block text-sm p-1 sm:px-4 sm:py-1 rounded-full hover:text-teal-400 transition-all`}
    >
      <span
        className={`${
          isActive ? "py-1 border-b-2 border-teal-400" : "capsize"
        }`}
      >
        {name}
      </span>
    </NextLink>
  );
}

const NavMenu = () => {
  return (
    <nav className="hidden lg:flex items-center">
      {siteMetadata.siteNavLinks.map((link, index) => (
        <NavItem
          key={index}
          href={link.href}
          name={link.name}
        />
      ))}
    </nav>
  );
};

export default NavMenu;
