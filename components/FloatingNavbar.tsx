import React from "react";
import { FloatingNav } from "./ui/FloatingNav";
import { BadgeInfo, FolderKanban, House, MonitorCog } from "lucide-react";

const defaultNavItems: { name: string; link: string; icon: JSX.Element }[] = [
  { name: "Home", link: "/", icon: <House /> },
  { name: "About Us", link: "/about", icon: <BadgeInfo /> },
  { name: "Our Projects", link: "/projects", icon: <FolderKanban /> },
  { name: "Our Services", link: "/services", icon: <MonitorCog /> },
];

const FloatingNavbar = () => {
  return (
  <div className="relative  w-full">
  <FloatingNav navItems={defaultNavItems} />
</div>
  )
};

export default FloatingNavbar;
