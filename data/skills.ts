import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPhp,
  FaWordpress,
} from "react-icons/fa";

import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMysql, SiMongodb, SiPostman, SiExpress, SiSocketdotio,SiAxios } from "react-icons/si";

import { Skill } from "@/types/index";

export const SKILLS: Skill[] = [
  // FRONTEND
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },

  // BACKEND
  { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
  { name: "Socket.io", icon: SiSocketdotio, color: "text-white" },

  // DATABASE
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },

  // TOOLS
  { name: "Git", icon: FaGitAlt, color: "text-red-500" },
  { name: "WordPress", icon: FaWordpress, color: "text-blue-400" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
  { name: "Axios", icon: SiAxios, color: "text-purple-400" },
];