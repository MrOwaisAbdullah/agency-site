"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/assets/logo.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { CgClose, CgMenuRight } from "react-icons/cg";

const Header = () => {
  const [isoOpen, setisoOpen] = useState(false);

  function handleLinkClick() {
    setisoOpen(false);
  }

  function getMenuClassNames() {
    let menuClasses = [];

    if (isoOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "w-full",
        "h-[50vh]",
        "mt-2",
        "px-8",
        "py-12",
        "gap-10",
        "flex-col",
        "left-0",
        "top-[70px]",
        "bg-background/90",
        "z-50",
        "backdrop-blur-sm",
      ];
    } else {
      menuClasses = [
        "hidden",
        "md:flex",
        "md:ml-auto",
        "flex-wrap",
        "items-center",
        "justify-center",
      ];
    }
    return menuClasses.join(" ");
  }
  return (
    <header className="max-w-7xl mx-auto sm:pt-6 relative z-50 bg-transparent bg-opacity-0">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]" />

      <div className="mx-auto flex flex-wrap pt-8 sm:pt-0 p-5 flex-col md:flex-row z-50">
        <Link href={"/"} className="flex mb-4 md:mb-0">
          <Image src={Logo} width={160} height={80} alt={"Burraq Digits"} />
        </Link>

        <nav className={getMenuClassNames()}>
          <Link
            href={"/"}
            onClick={handleLinkClick}
            className="mr-5 text-white text-base hover:text-accent"
          >
            HOME
          </Link>
          <Link
            href={"/about"}
            onClick={handleLinkClick}
            className="mr-5 text-white text-base hover:text-accent"
          >
            ABOUT
          </Link>
          <Link
            href={"/projects"}
            onClick={handleLinkClick}
            className="mr-5 text-white text-base hover:text-accent"
          >
            PROJECTS
          </Link>

          <button className="group inline-flex items-center font-bold bg-gradient-to-br from-blue-900 via-accent to-blue-700 hover:from-blue-950 hover:bg-blue-500 hover:bg-gradient-to-tr text-white border-0 py-4 px-6 sm:py-2 sm:px-4 focus:outline-none duration-500 rounded-full text-base mt-4 md:mt-0">
            <Link href={"/contact"} onClick={handleLinkClick}>
              GET A FREE QUOTE
            </Link>
            <FaArrowRight className="pl-3 text-2xl" />
          </button>
        </nav>
        <button
          className="md:hidden flex items-center justify-end -mt-14 text-4xl text-gray-600 hover:text-accent"
          onClick={() => {
            setisoOpen(!isoOpen);
          }}
        >
          {isoOpen ? <CgClose /> : <CgMenuRight />}
        </button>
      </div>
    </header>
  );
};

export default Header;
