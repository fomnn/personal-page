export type Skill = 
  | { name: string; iconSrc: string; icon?: never }
  | { name: string; icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element; iconSrc?: never }
