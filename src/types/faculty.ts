import { LucideIcon } from "lucide-react";

export interface Faculty {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  courseCount?: number;
  image: string;
  icon: LucideIcon;
  accent: string;
  borderAccent: string;
}