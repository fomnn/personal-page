import { SVGProps, useEffect } from "react";
import VscodeIconsFileTypeVue from "~icons/vscode-icons/file-type-vue";
import VscodeIconsFileTypeHtml from "~icons/vscode-icons/file-type-html";
import VscodeIconsFileTypeCss from "~icons/vscode-icons/file-type-css";
import SkillIconsJavascript from "~icons/skill-icons/javascript";
import VscodeIconsFileTypeTypescriptOfficial from "~icons/vscode-icons/file-type-typescript-official";
import VscodeIconsFileTypePython from "~icons/vscode-icons/file-type-python";
import VscodeIconsFileTypePhp from "~icons/vscode-icons/file-type-php";
import VscodeIconsFileTypeReactjs from "~icons/vscode-icons/file-type-reactjs";
import SkillIconsAlpinejsDark from "~icons/skill-icons/alpinejs-dark";
import SkillIconsExpressjsDark from "~icons/skill-icons/expressjs-dark";
import SkillIconsFlaskLight from "~icons/skill-icons/flask-light";
import NitroIcon from "@/assets/icons/nitro.svg";
import VscodeIconsFileTypeNuxt from "~icons/vscode-icons/file-type-nuxt";
import VscodeIconsFileTypeMysql from "~icons/vscode-icons/file-type-mysql";
import LogosPostgresql from "~icons/logos/postgresql";
import VscodeIconsFileTypeFlutter from "~icons/vscode-icons/file-type-flutter";
import EosIconsMaster from "~icons/eos-icons/master";
import SkillIconsFigmaDark from "~icons/skill-icons/figma-dark";
import LogosAdobePhotoshop from "~icons/logos/adobe-photoshop";
import VscodeIconsFileTypeTailwind from "~icons/vscode-icons/file-type-tailwind";
import SkillItem from "@/components/SkillItem";

export default function Tech() {
  useEffect(() => {
    document.title = "My Personal Page | Skill";
  }, []);

  const programmingLanguages: {
    Icon: ((props: SVGProps<SVGSVGElement>) => React.ReactElement) | string;
    title: string;
    mastered?: boolean;
  }[] = [
    {
      Icon: VscodeIconsFileTypeHtml,
      title: "HTML",
      mastered: true,
    },
    {
      Icon: VscodeIconsFileTypeCss,
      title: "CSS",
      mastered: true,
    },
    {
      Icon: SkillIconsJavascript,
      title: "Javascript",
      mastered: true,
    },
    {
      Icon: VscodeIconsFileTypeTypescriptOfficial,
      title: "Typescript",
      mastered: true,
    },
    {
      Icon: VscodeIconsFileTypePython,
      title: "Python",
      mastered: true,
    },
    {
      Icon: VscodeIconsFileTypePhp,
      title: "PHP",
    },
  ]

  const frontEndFrameworks: {
    Icon: ((props: SVGProps<SVGSVGElement>) => React.ReactElement) | string;
    title: string;
    mastered?: boolean;
  }[] = [
    {
      Icon: VscodeIconsFileTypeVue,
      title: "Vue",
      mastered: true,
    },
    {
      Icon: VscodeIconsFileTypeReactjs,
      title: "React",
      mastered: true,
    },
    {
      Icon: SkillIconsAlpinejsDark,
      title: "Alpine",
    },
    {
      Icon: VscodeIconsFileTypeFlutter,
      title: "Flutter",
    },
    {
      Icon: VscodeIconsFileTypeTailwind,
      title: "Tailwind",
      mastered: true,
    },
  ]

  const backendFrameworks: {
    Icon: ((props: SVGProps<SVGSVGElement>) => React.ReactElement) | string;
    title: string;
    mastered?: boolean;
  }[] = [
    {
      Icon: SkillIconsExpressjsDark,
      title: "Express",
      mastered: true,
    },
    {
      Icon: NitroIcon,
      title: "Nitro",
      mastered: true,
    },
    {
      Icon: SkillIconsFlaskLight,
      title: "Flask",
    },
  ]

  const fullstackFrameworks: {
    Icon: ((props: SVGProps<SVGSVGElement>) => React.ReactElement) | string;
    title: string;
    mastered?: boolean;
  }[] = [
    {
      Icon: VscodeIconsFileTypeNuxt,
      title: "Nuxt",
      mastered: true,
    },
  ]
  
  const databases: {
    Icon: ((props: SVGProps<SVGSVGElement>) => React.ReactElement) | string;
    title: string;
    mastered?: boolean;
  }[] = [
    {
      Icon: VscodeIconsFileTypeMysql,
      title: "Mysql",
      mastered: true,
    },
    {
      Icon: LogosPostgresql,
      title: "Postgres",
    },
  ]

  const others: {
    Icon: ((props: SVGProps<SVGSVGElement>) => React.ReactElement) | string;
    title: string;
    mastered?: boolean;
  }[] = [
    {
      Icon: SkillIconsFigmaDark,
      title: "Figma",
      mastered: true,
    },
    {
      Icon: LogosAdobePhotoshop,
      title: "Photoshop",
      mastered: true,
    },
  ]

  return (
    <div className="space-y-16 py-12">
      <div className="space-y-4">
        <h1 className="text-3xl">Skillsets</h1>
        <p>
          The world of web development continues to develop at an exciting pace,
          introducing a large number of exciting new technologies. Here are some
          of the web development skills I currently have and have learned:
        </p>
        <p>
          *I mark skills that I have mastered fairly well with the sign{" "}
          <EosIconsMaster className="inline-block text-xs" />
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="h text-xl font-semibold text-center lg:text-start text-white">
          Programming Language
        </h2>
        <div className="grid lg:grid-cols-5 grid-cols-3 gap-x-2 gap-y-1 px-4">
          {programmingLanguages.map((language) => (
            <SkillItem {...language} key={language.title} />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="h text-xl font-semibold text-center lg:text-start text-white">
          Front End Framework/Library
        </h2>
        <div className="grid lg:grid-cols-5 grid-cols-3 gap-x-2 gap-y-1 px-4">
          {frontEndFrameworks.map((framework) => (
            <SkillItem {...framework} key={framework.title} />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="h text-xl font-semibold text-center lg:text-start text-white">
          Back End Framework/Library
        </h2>
        <div className="grid lg:grid-cols-5 grid-cols-3 gap-x-2 gap-y-1 px-4">
          {backendFrameworks.map((framework) => (
            <SkillItem {...framework} key={framework.title} />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="h text-xl font-semibold text-center lg:text-start text-white">
          Fullstack Framework
        </h2>
        <div className="grid lg:grid-cols-5 grid-cols-3 gap-x-2 gap-y-1 px-4">
          {fullstackFrameworks.map((framework) => (
            <SkillItem {...framework} key={framework.title} />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="h text-xl font-semibold text-center lg:text-start text-white">Databases</h2>
        <div className="grid lg:grid-cols-5 grid-cols-3 gap-x-2 gap-y-1 px-4">
          {databases.map((database) => (
            <SkillItem {...database} key={database.title} />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="h text-xl font-semibold text-center lg:text-start text-white">Others</h2>
        <div className="grid lg:grid-cols-5 grid-cols-3 gap-x-2 gap-y-1 px-4">
          {others.map((other) => (
            <SkillItem {...other} key={other.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
