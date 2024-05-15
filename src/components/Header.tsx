import SolarHomeSmileOutline from "~icons/solar/home-smile-outline";
import SolarFolderWithFilesOutline from "~icons/solar/folder-with-files-outline";
import { Link } from "react-router-dom";
import SolarRulerPenBroken from "~icons/solar/ruler-pen-broken";
import SolarMoonBroken from "~icons/solar/moon-broken";
import { useAtom } from "jotai";
import { isDarkModeAtom } from "@/store/darkModePreference";
import SolarSun2Broken from "~icons/solar/sun-2-broken";
import SolarUserHandUpBroken from "~icons/solar/user-hand-up-broken";

export default function Header({ path }: { path: string }) {
  const [isDarkMode, setDarkMode] = useAtom(isDarkModeAtom);

  return (
    <header className="flex h-[3rem] items-center justify-between rounded-full bg-zinc-100 px-5 dark:bg-[#222222]">
      <div className="flex items-center gap-4 text-2xl font-thin">
        <Link
          to={"/"}
          className="relative flex size-7 cursor-pointer items-center justify-center rounded-full after:absolute after:-top-2 after:left-[120%] after:z-10 after:hidden after:rounded-md after:bg-white after:px-2 after:text-sm after:font-normal after:text-stone-700 after:content-['Home'] hover:after:block"
        >
          <SolarHomeSmileOutline
            className={
              "text-[1.1rem] " +
              (path === "/"
                ? "text-emerald-400"
                : "text-stone-800 dark:text-white")
            }
          />
          <span className="absolute top-9 hidden h-[2px] w-7 bg-gradient-to-r from-green-400/5 via-green-400/80 to-green-400/5"></span>
        </Link>
        <Link
          to={"/skill"}
          className="relative flex size-7 cursor-pointer items-center justify-center rounded-full after:absolute after:-top-2 after:left-[120%] after:z-10 after:hidden after:rounded-md after:bg-white after:px-2 after:text-sm after:font-normal after:text-stone-700 after:content-['Skill'] hover:after:block"
        >
          <SolarRulerPenBroken
            className={
              "text-[1.1rem] " +
              (path === "/skill"
                ? "text-emerald-400"
                : "text-stone-800 dark:text-white")
            }
          />
          <span className="absolute top-9 hidden h-[2px] w-7 bg-gradient-to-r from-green-400/5 via-green-400/80 to-green-400/5"></span>
        </Link>
        <Link
          to={"/projects"}
          className="relative flex size-7 cursor-pointer items-center justify-center rounded-full after:absolute after:-top-2 after:left-[120%] after:z-10 after:hidden after:rounded-md after:bg-white after:px-2 after:text-sm after:font-normal after:text-stone-700 after:content-['Project'] hover:after:block"
        >
          <SolarFolderWithFilesOutline
            className={
              "text-[1.1rem] " +
              (path === "/projects"
                ? "text-emerald-400"
                : "text-stone-800 dark:text-white")
            }
          />
          <span className="absolute top-9 hidden h-[2px] w-7 bg-gradient-to-r from-green-400/5 via-green-400/80 to-green-400/5"></span>
        </Link>
        <Link
          to={"/about"}
          className="relative flex size-7 cursor-pointer items-center justify-center rounded-full after:absolute after:-top-2 after:left-[120%] after:z-10 after:hidden after:rounded-md after:bg-white after:px-2 after:text-sm after:font-normal after:text-stone-700 after:content-['About'] hover:after:block"
        >
          <SolarUserHandUpBroken
            className={
              "text-[1.1rem] " +
              (path === "/about"
                ? "text-emerald-400"
                : "text-stone-800 dark:text-white")
            }
          />
          <span className="absolute top-9 hidden h-[2px] w-7 bg-gradient-to-r from-green-400/5 via-green-400/80 to-green-400/5"></span>
        </Link>
      </div>
      <div className="flex items-center">
        <button onClick={() => setDarkMode((d) => !d)}>
          {isDarkMode ? (
            <SolarMoonBroken className="text-base text-white" />
          ) : (
            <SolarSun2Broken className="text-base text-stone-800" />
          )}
        </button>
      </div>
    </header>
  );
}
