import { skills } from "@/data/skills"

export interface Project {
  title: string;
  description: string;
  link: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  stack: typeof skills[number]['name'][]
}

