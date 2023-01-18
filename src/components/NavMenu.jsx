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
        isActive ? "font-bold text-gray-900" : "font-normal text-gray-600"
      } 'hidden md:inline-block p-1 sm:px-6 sm:py-2 rounded-full hover:text-teal-500 transition-all`}
    >
      <span
        className={`${
          isActive ? "py-1 border-b-2 border-teal-500" : "capsize"
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
