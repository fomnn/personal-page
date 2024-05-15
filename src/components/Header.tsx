import SolarHomeSmileOutline from "~icons/solar/home-smile-outline"
import SolarFolderWithFilesOutline from "~icons/solar/folder-with-files-outline"
import { Link, useLocation, useNavigate } from "react-router-dom"
import SolarRulerPenBroken from "~icons/solar/ruler-pen-broken"
import SolarMoonBroken from "~icons/solar/moon-broken"
import { useAtom } from "jotai"
import isDarkModeAtom from "@/store/darkModePreference"
import SolarSun2Broken from "~icons/solar/sun-2-broken"
import SolarUserHandUpBroken from "~icons/solar/user-hand-up-broken"
import MaterialSymbolsLanguageJapaneseKanaRounded from "~icons/material-symbols/language-japanese-kana-rounded"
import language, { Language } from "@/store/language"

export default function Header() {
  const [isDarkMode, setDarkMode] = useAtom(isDarkModeAtom)
  const [lang, setLang] = useAtom(language)
  const path = useLocation().pathname
  const navigate = useNavigate()

  function redirectToEnglish() {
    if (path.startsWith("/id")) {
      setLang(Language.EN)
      const to = "/en" + path.split("/id")[1]
      console.log(`Redirecting to ${to}`)
      navigate(to)
    }
  }

  function redirectToIndonesia() {
    if (path.startsWith("/en")) {
      setLang(Language.ID)
      const to = "/id" + path.split("/en")[1]
      console.log(`Redirecting to ${to}`)
      navigate(to)
    }
  }

  return (
    <header className="flex h-[3rem] items-center justify-between rounded-full bg-zinc-100 px-5 dark:bg-[#222222]">
      <div className="flex items-center gap-4 text-2xl font-thin">
        <Link
          to={`/${lang}`}
          className="relative flex size-7 cursor-pointer items-center justify-center rounded-full after:absolute after:-top-2 after:left-[120%] after:z-10 after:hidden after:rounded-md after:bg-white after:px-2 after:text-sm after:font-normal after:text-stone-700 after:content-['Home'] hover:after:block"
        >
          <SolarHomeSmileOutline
            className={
              "text-[1.1rem] " +
              (path === "/en" || path === "/id"
                ? "text-emerald-400"
                : "text-stone-800 dark:text-white")
            }
          />
          <span className="absolute top-9 hidden h-[2px] w-7 bg-gradient-to-r from-green-400/5 via-green-400/80 to-green-400/5"></span>
        </Link>
        <Link
          to={`/${lang}/skill`}
          className="relative flex size-7 cursor-pointer items-center justify-center rounded-full after:absolute after:-top-2 after:left-[120%] after:z-10 after:hidden after:rounded-md after:bg-white after:px-2 after:text-sm after:font-normal after:text-stone-700 after:content-['Skill'] hover:after:block"
        >
          <SolarRulerPenBroken
            className={
              "text-[1.1rem] " +
              (path.endsWith("/skill")
                ? "text-emerald-400"
                : "text-stone-800 dark:text-white")
            }
          />
          <span className="absolute top-9 hidden h-[2px] w-7 bg-gradient-to-r from-green-400/5 via-green-400/80 to-green-400/5"></span>
        </Link>
        <Link
          to={`/${lang}/projects`}
          className="relative flex size-7 cursor-pointer items-center justify-center rounded-full after:absolute after:-top-2 after:left-[120%] after:z-10 after:hidden after:rounded-md after:bg-white after:px-2 after:text-sm after:font-normal after:text-stone-700 after:content-['Project'] hover:after:block"
        >
          <SolarFolderWithFilesOutline
            className={
              "text-[1.1rem] " +
              (path.endsWith("/projects")
                ? "text-emerald-400"
                : "text-stone-800 dark:text-white")
            }
          />
          <span className="absolute top-9 hidden h-[2px] w-7 bg-gradient-to-r from-green-400/5 via-green-400/80 to-green-400/5"></span>
        </Link>
        <Link
          to={`/${lang}/about`}
          className="relative flex size-7 cursor-pointer items-center justify-center rounded-full after:absolute after:-top-2 after:left-[120%] after:z-10 after:hidden after:rounded-md after:bg-white after:px-2 after:text-sm after:font-normal after:text-stone-700 after:content-['About'] hover:after:block"
        >
          <SolarUserHandUpBroken
            className={
              "text-[1.1rem] " +
              (path.endsWith("/about")
                ? "text-emerald-400"
                : "text-stone-800 dark:text-white")
            }
          />
          <span className="absolute top-9 hidden h-[2px] w-7 bg-gradient-to-r from-green-400/5 via-green-400/80 to-green-400/5"></span>
        </Link>
      </div>
      <div className="flex h-full items-center gap-3">
        <div className="group relative flex h-full items-center">
          {isDarkMode ? (
            <MaterialSymbolsLanguageJapaneseKanaRounded className="text-xl text-white" />
          ) : (
            <MaterialSymbolsLanguageJapaneseKanaRounded className="text-xl text-stone-800" />
          )}
          <div className="absolute z-50 left-0 top-[90%] hidden rounded-md bg-white px-2 py-2 text-xs lg:text-sm group-hover:block dark:bg-black/40">
            <button
              onClick={() => redirectToEnglish()}
              className="w-full rounded-sm py-1 pl-2 pr-4 text-start hover:bg-zinc-600/20 dark:text-white"
            >
              English
            </button>
            <button
              onClick={() => redirectToIndonesia()}
              className="w-full rounded-sm py-1 pl-2 pr-4 text-start hover:bg-zinc-600/20 dark:text-white"
            >
              Indonesia
            </button>
          </div>
        </div>

        <button className=" h-full" onClick={() => setDarkMode((d) => !d)}>
          {isDarkMode ? (
            <SolarMoonBroken className="text-base text-white" />
          ) : (
            <SolarSun2Broken className="text-base text-stone-800" />
          )}
        </button>
      </div>
    </header>
  )
}
