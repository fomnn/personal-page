import { useEffect } from "react";
import AntDesignProjectTwotone from "~icons/ant-design/project-twotone";

export default function Projects() {
  useEffect(() => {
    document.title = "My Personal Page | Projects";
  }, []);

  return (
    <div className="space-y-16 py-12">
      <div className="space-y-4">
        <h1 className="text-3xl">Projects.</h1>
        <p>
          During my studies at Telkom University, I've been involved in various
          projects that I'm quite proud of. Many of them are open-source, so
          feel free to explore the code and contribute if you have ideas for
          improvement!
        </p>
      </div>
      <div className=" mt-3 space-y-4">
        <a
          href="https://males.vercel.app/"
          target="_blank"
          className="group flex items-end gap-2"
        >
          <div className="max-w-[16rem] md:max-w-none">
            <h3 className="font-semibold group-hover:text-emerald-400">
              Males
            </h3>
            <p className="truncate">
              High School Learning Material Collection Website
            </p>
          </div>
          <span className="h-4 min-w-4 flex-grow border-b border-dashed border-zinc-800 group-hover:border-zinc-700"></span>
          <AntDesignProjectTwotone className="text-2xl text-white h" />
        </a>
        <a
          href="https://sayurt.vercel.app/"
          target="_blank"
          className="group flex items-end gap-2"
        >
          <div className="max-w-[16rem] md:max-w-none">
            <h3 className="font-semibold group-hover:text-emerald-400">
              Sayurt
            </h3>
            <p className="truncate">Healthy living starts with vegetables!</p>
          </div>
          <span className="h-4 min-w-4 flex-grow border-b border-dashed border-zinc-800 group-hover:border-zinc-700"></span>
          <AntDesignProjectTwotone className="text-2xl text-white h" />
        </a>
        <a
          href="https://cetakuy-nuxt.vercel.app/"
          target="_blank"
          className="group flex items-end gap-2"
        >
          <div className="max-w-[16rem] md:max-w-none">
            <h3 className="font-semibold group-hover:text-emerald-400">
              Cetakuy
            </h3>
            <p className="truncate">
              Print perfection, delivered to your door.
            </p>
          </div>
          <span className="h-4 min-w-4 flex-grow border-b border-dashed border-zinc-800 group-hover:border-zinc-700"></span>
          <AntDesignProjectTwotone className="text-2xl text-white h" />
        </a>
        <a
          href="https://ra-smarttourism.vercel.app/"
          target="_blank"
          className="group flex items-end gap-2"
        >
          <div className="max-w-[16rem] md:max-w-none">
            <h3 className="font-semibold group-hover:text-emerald-400">
              CoE Smart Tourism and Hospitality
            </h3>
            <p className="truncate">Escape the ordinary, indulge in luxury.</p>
          </div>
          <span className="h-4 min-w-4 flex-grow border-b border-dashed border-zinc-800 group-hover:border-zinc-700"></span>
          <AntDesignProjectTwotone className="text-2xl text-white h" />
        </a>
      </div>
    </div>
  );
}
