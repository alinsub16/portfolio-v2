import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
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
    image: string;
    title: string;
    tags: string[];
    size?: number;
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
  achievements:String[];
}
