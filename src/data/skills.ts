import { Skill } from "@/types/Skills"
import VscodeIconsFileTypeVue from "~icons/vscode-icons/file-type-vue";
import VscodeIconsFileTypeReactjs from "~icons/vscode-icons/file-type-reactjs";
import VscodeIconsFileTypeFlutter from "~icons/vscode-icons/file-type-flutter";
import VscodeIconsFileTypeTailwind from "~icons/vscode-icons/file-type-tailwind";
import VscodeIconsFileTypeTypescriptOfficial from "~icons/vscode-icons/file-type-typescript-official";
import VscodeIconsFileTypeNuxt from "~icons/vscode-icons/file-type-nuxt";
import SkillIconsLaravelDark from '~icons/skill-icons/laravel-dark'
import LogosHono from '~icons/logos/hono'
import LogosPhp from '~icons/logos/php'
import LogosFirebase from '~icons/logos/firebase'
import LogosSupabaseIcon from '~icons/logos/supabase-icon'

export const skills = [
  {
    name: "Vue",
    icon: VscodeIconsFileTypeVue,
  },
  {
    name: "React",
    icon: VscodeIconsFileTypeReactjs,
  },
  {
    name: "Flutter",
    icon: VscodeIconsFileTypeFlutter
  },
  {
    name: "Tailwind",
    icon: VscodeIconsFileTypeTailwind,
  },
  {
    name: "Typescript",
    icon: VscodeIconsFileTypeTypescriptOfficial,
  },
  {
    name: "Nuxt",
    icon: VscodeIconsFileTypeNuxt,
  },
  {
    name: "Laravel",
    icon: SkillIconsLaravelDark,
  },
  {
    name: "Hono",
    icon: LogosHono,
  },
  {
    name: "PHP",
    icon: LogosPhp,
  },
  {
    name: "Firebase",
    icon: LogosFirebase,
  },
  {
    name: "Supabase",
    icon: LogosSupabaseIcon,
  },
  {
    name: "Python",
    iconSrc: 'fdsf',
  }
] as const satisfies Skill[]