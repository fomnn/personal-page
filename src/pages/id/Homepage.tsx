import MdiGithub from "~icons/mdi/github";
import MdiTelegram from "~icons/mdi/telegram";
import IcBaselineWhatsapp from "~icons/ic/baseline-whatsapp";
import me from "@/assets/me2.jpg";
// import { projects } from "@/data/projects";
import { useEffect } from "react";
// import { useAtomValue } from "jotai"
// import language from "@/store/language"

export default function Homepage() {
  // const projects2 = projects.slice(0, 3);
  // const lang = useAtomValue(language)

  useEffect(() => {
    document.title = "My Personal Page";
  }, []);

  return (
    <div className="py-12 space-y-16">
      <div className="space-y-6">
        <img src={me} alt="" className="size-16 rounded-full" />
        <h1 className="text-2xl font-bold">Haloo!</h1>
        <div className="space-y-2 text-justify">
          <p>
            Hai! Nama saya <span className="text-black dark:text-white font-semibold dark:font-normal">Fathur</span>, seorang mahasiswi Diploma 3 Sistem Informasi Telkom University.
          </p>
          <p>
          Saat ini saya sedang mempelajari dunia pengembangan{" "}
            <span className="text-black dark:text-white font-semibold dark:font-normal">Front-end development</span>,
            khususnya menggunakan kerangka kerja{" "}
            <span className="text-black dark:text-white font-semibold dark:font-normal">
              Vue.js, React.js, and Library Node.js
            </span>
            . Selama masa kuliah saya, saya telah aktif mengembangkan keterampilan coding saya melalui berbagai proyek. Di sini, saya ingin berbagi eksperimen kecil, proyek menarik, dan pemikiran saya (terutama tentang teknologi dan desain).
          </p>
        </div>
      </div>
      <div className="">
        <h2 className="font-semibold">FIND ME ON</h2>
        <div className="mt-3 space-y-1">
          <a
            href="https://github.com/fomnn"
            target="_black"
            className="group flex gap-4 items-center"
          >
            <p className="text-white group-hover:text-emerald-400 h">Github</p>
            <span className="w-full border-b border-zinc-800 group-hover:border-zinc-700 border-dashed h-4"></span>
            <MdiGithub className="text-white text-3xl group-hover:text-emerald-400 h" />
          </a>
          <a
            href="https://t.me/+6282238382679"
            target="_black"
            className="group flex gap-4 items-center"
          >
            <p className="text-white group-hover:text-emerald-400 h">Telegram</p>
            <span className="w-full border-b border-zinc-800 group-hover:border-zinc-700 border-dashed h-4"></span>
            <MdiTelegram className="text-white text-3xl group-hover:text-emerald-400 h" />
          </a>
          <a
            href="https://wa.me/6282238382679"
            target="_black"
            className="group flex gap-4 items-center"
          >
            <p className="text-white group-hover:text-emerald-400 h">Whatsapp</p>
            <span className="w-full border-b border-zinc-800 group-hover:border-zinc-700 border-dashed h-4"></span>
            <IcBaselineWhatsapp className="text-white text-3xl group-hover:text-emerald-400 h" />
          </a>
        </div>
      </div>
      {/* <div className="">
        <div className="text-white flex justify-between items-center">
          <h2 className="font-semibold">PROJEK</h2>
          <Link to={`/${lang}/projects`} className="hover:text-slate-400 transition duration-300 text-sm">Semua Projek</Link>
        </div>
        <div className=" mt-3 space-y-4">\
        {
          projects2.map((project, index) => {
            return (<a
              href={project.link}
              target="_blank"
              className="group flex items-end gap-2"
              key={index}
            >
              <div className="max-w-[16rem] md:max-w-none">
                <h3 className="font-semibold group-hover:text-emerald-400">
                  {project.title}
                </h3>
                <p className="truncate">
                  {project.description}
                </p>
              </div>
              <span className="h-4 min-w-4 flex-grow border-b border-dashed border-zinc-800 group-hover:border-zinc-700"></span>
              <project.icon className="text-2xl text-white" />
            </a>)
          })
        }

        </div>
      </div> */}
    </div>
  );
}
