import MdiGithub from "~icons/mdi/github";
import MdiTelegram from "~icons/mdi/telegram";
import IcBaselineWhatsapp from '~icons/ic/baseline-whatsapp'
import me from '@/assets/me.jpg'

export default function Homepage() {
  return (
    <div className="py-12 space-y-16">
      <div className="space-y-6">
        <img
          src={me}
          alt=""
          className="size-16 rounded-full"
        />
        <h1 className="text-white text-xl font-bold">Haloo!</h1>
        <div className="space-y-2 text-justify">
          <p>
            Hi! My name is <span className="text-white">Fathur</span>, a Diploma
            3 Information Systems student at Telkom University.
          </p>
          <p>
            I'm currently delving into the world of <span className="text-white">Front-end development</span>,
            particularly using the <span className="text-white">Vue.js, React.js, and Node.js frameworks</span>.
            Throughout my college years, I've been actively developing my coding
            skills through various projects. Here, I want to share my little
            experiments, interesting projects, and thoughts (mainly about
            technology and design).
          </p>
        </div>
      </div>
      <div className="">
        <h2 className="font-semibold">FIND ME ON</h2>
        <div className="mt-3 space-y-1">
          <a href="https://github.com/omanfathurrahman" target="_black" className="group flex gap-4 items-center">
            <p className="text-white group-hover:text-white/70">Github</p>
            <span className="w-full border-b border-zinc-800 group-hover:border-zinc-700 border-dashed h-4"></span>
            <MdiGithub className="text-white text-3xl" />
          </a>
          <a href="https://t.me/+6282238382679" target="_black" className="group flex gap-4 items-center">
            <p className="text-white group-hover:text-white/70">Telegram</p>
            <span className="w-full border-b border-zinc-800 group-hover:border-zinc-700 border-dashed h-4"></span>
            <MdiTelegram className="text-white text-3xl" />
          </a>
          <a href="https://wa.me/6282238382679" target="_black" className="group flex gap-4 items-center">
            <p className="text-white group-hover:text-white/70">Whatsapp</p>
            <span className="w-full border-b border-zinc-800 group-hover:border-zinc-700 border-dashed h-4"></span>
            <IcBaselineWhatsapp className="text-white text-3xl" />
          </a>
        </div>
      </div>
      <div className="">
        <h2 className="font-semibold">FEATURED PROJECTS</h2>
        <div className=" mt-3 space-y-4">
          <div className="group flex items-end gap-2">
            <div className="max-w-[16rem] md:max-w-none">
              <h4 className="text-white font-semibold group-hover:text-emerald-400">
                Males
              </h4>
              <p className="truncate">
                High School Learning Material Collection Website
              </p>
            </div>
            <span className="flex-grow min-w-4 border-b border-zinc-800 group-hover:border-zinc-700 border-dashed h-4"></span>
            <img
              src="https://icon-library.com/images/learning-icon/learning-icon-5.jpg"
              alt=""
              className="size-[2rem] object-contain"
            />
          </div>
          <div className="group flex items-end gap-2">
            <div className="max-w-[16rem] md:max-w-none">
              <h4 className="text-white font-semibold group-hover:text-emerald-400">
                Sayurt
              </h4>
              <p className="truncate">
                High School Learning Material Collection Website
              </p>
            </div>
            <span className="flex-grow min-w-4 border-b border-zinc-800 group-hover:border-zinc-700 border-dashed h-4"></span>
            <img
              src="https://icon-library.com/images/learning-icon/learning-icon-5.jpg"
              alt=""
              className="size-[2rem] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
