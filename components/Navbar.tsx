"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconFileText,
  IconBook,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white" />
      ),
      href: "#home",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-white" />
      ),
      href: "#about",
    },
    {
      title: "Skills",
      icon: (
        <IconBriefcase className="h-full w-full text-white" />
      ),
      href: "#skills",
    },
    {
      title: "Projects",
      icon: (
        <IconFileText className="h-full w-full text-white" />
      ),
      href: "#projects",
    },
    {
      title: "Education",
      icon: (
        <IconBook className="h-full w-full text-white" />
      ),
      href: "#education",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-white" />
      ),
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white" />
      ),
      href: "https://github.com/prangggshu",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-white" />
      ),
      href: "https://linkedin.com/in/prangggshu",
    },
  ];

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex items-center justify-center">
      <FloatingDock items={links} desktopClassName="dark:bg-neutral-950" />
    </div>
  );
}
