import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { SiAboutDotMe } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <SiAboutDotMe />,
    cName: "nav-text",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <BsFillPersonLinesFill />,
    cName: "nav-text",
  },
];
