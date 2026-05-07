
import { Code, Cpu, Terminal, Database, Layers, Layout, } from 'lucide-react';
import { Skill } from "@/types/index";


export const SKILLS: Skill[] = [
  { name: "React", icon: Code, color: "text-cyan-400" },
  { name: "Node.js", icon: Cpu, color: "text-green-400" },
  { name: "TypeScript", icon: Terminal, color: "text-blue-400" },
  { name: "PostgreSQL", icon: Database, color: "text-orange-400" },
  { name: "Next.js", icon: Layers, color: "text-white" },
  { name: "Tailwind", icon: Layout, color: "text-sky-400" },
];