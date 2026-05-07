import { LucideIcon } from "lucide-react";
import { ReactElement } from "react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}
export interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
}

export interface SmallCardProps {   
    name: string;   
    color: string;
    icon: LucideIcon;
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