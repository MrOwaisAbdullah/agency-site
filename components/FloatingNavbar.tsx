import React from "react";
import { FloatingNav } from "./ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { GrProjects, GrServices } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";

const defaultNavItems: { name: string; link: string; icon: JSX.Element }[] = [
  { name: "Home", link: "/", icon: <FaHome /> },
  { name: "About Us", link: "/about", icon: <IoPerson /> },
  { name: "Our Projects", link: "/projects", icon: <GrProjects /> },
  { name: "Our Services", link: "/services", icon: <GrServices /> },
];

const FloatingNavbar = () => {
  return (
  <div className="relative  w-full">
  <FloatingNav navItems={defaultNavItems} />
</div>
  )
};

export default FloatingNavbar;
