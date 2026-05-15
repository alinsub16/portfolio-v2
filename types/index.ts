import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  liveUrl: string;
  githubUrl: string;
  isLatest?: boolean;
}
export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SmallCardProps {   
    name: string;   
    color: string;
    icon: IconType;
    size?: number ;
}

export interface LargeCardProps {
    description: string;
    image: string | StaticImageData;
    title: string;
    liveUrl: string ;
    githubUrl: string;
    tags: string[];
    size?: number;
    isLatest?: boolean;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ExperienceTypes {
  role:String;
  company:String;
  period:String;
  description:String;
}
