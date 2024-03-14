"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <div className="relative z-30 mx-auto max-w-[1920px] flex items-center justify-between py-5 px-6 lg:px-20">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={75} height={30} />
      </Link>
      <ul className="hidden lg:flex h-full gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="cursor-pointer text-lg text-gray-800 transition-all hover:font-semibold justify-center items-center"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex">
        <Button type="button" label="Login" icon="/user.svg" />
      </div>

      <div
        onClick={() => setNavMobile(!navMobile)}
        className="cursor-pointer inline-block lg:hidden z-30 hover:font-bold"
      >
        {navMobile ? (
          <Image src="/close.svg" alt="close" width={26} height={26} />
        ) : (
          <Image src="/menu.svg" alt="menu" width={26} height={26} />
        )}
      </div>

      {/* Navbar mobile */}
      {navMobile && (
        <div
          className="lg:hidden z-10 min-h-screen absolute top-0 left-0 right-0 overflow-hidden transition-all w-full bg-gray-200
      "
        >
          <ul className="flex flex-col justify-center items-center h-screen gap-y-12">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="cursor-pointer text-xl text-black font-medium transition-all hover:font-semibold justify-center items-center"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
