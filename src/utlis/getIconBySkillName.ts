import { skills } from "@/data/skills"

export function getSkillIcon(name: string) {
  // Mencari skill berdasarkan nama
  const skill = skills.find(skill => skill.name === name)!;
  
  // Jika skill ditemukan, kembalikan icon atau iconSrc, jika tidak ditemukan kembalikan undefined
  if (skill) {
    if ("icon" in skill) {
      return {Icon: skill.icon};
    } else {
      return {icon: skill.iconSrc};
    }
  }
}