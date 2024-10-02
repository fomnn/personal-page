import me from "@/assets/me.jpg";
import ninja from "@/assets/ninja.jpg";
import BiArrow90degRight from "~icons/bi/arrow-90deg-right";
import MaterialSymbolsArrowRightAltRounded from "~icons/material-symbols/arrow-right-alt-rounded";
import MaterialSymbolsPersonalPlacesRounded from "~icons/material-symbols/personal-places-rounded";
import MaterialSymbolsLanguage from "~icons/material-symbols/language";
import TwemojiFlagIndonesia from "~icons/twemoji/flag-indonesia";
import IconParkEnglish from "~icons/icon-park/english";
import SolarEmojiFunnySquareBoldDuotone from "~icons/solar/emoji-funny-square-bold-duotone";
import MaterialSymbolsCodeBlocksRounded from "~icons/material-symbols/code-blocks-rounded";
import MaterialSymbolsBook4Rounded from "~icons/material-symbols/book-4-rounded";

export default function AboutMe() {
  return (
    <div className="space-y-16 py-12">
      <div className="mb-[8rem] flex flex-col-reverse lg:flex-row">
        <div className="mt-36 flex w-full flex-col justify-center gap-2 lg:mt-0 lg:w-6/12">
          <h1 className="mb-5 text-3xl font-semibold">
            Halo, Saya{" "}
            <span className="font-bold text-black dark:text-white dark:drop-shadow-[0px_0px_2px_#34d399]">
              Oman
            </span>
            .
          </h1>
          <p className="text-justify lg:text-start">
            Nama lengkap saya{" "}
            <span className="font-semibold text-black dark:font-normal dark:text-white">
              Fathur Rahman Nur
            </span>
            . Tapi teman-teman memanggil saya Oman, ada pula yang memanggil saya
            Omen😊
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex w-fit items-center gap-2 border-emerald-400 hover:border-b dark:text-white"
          >
            Baca resume saya
            <MaterialSymbolsArrowRightAltRounded className="text-lg text-emerald-500" />
          </a>
        </div>
        <div className="relative mx-auto mt-10 w-7/12 -translate-x-9 lg:mt-0 lg:w-6/12 lg:translate-x-0">
          <img
            src={ninja}
            alt=""
            className="absolute -bottom-6 -right-12 z-10 aspect-[4/5] w-5/12 translate-x-5 rotate-6 rounded-lg object-cover transition-all duration-300 ease-out hover:rotate-0 hover:drop-shadow-[0px_12px_23px_#34d399]"
          />
          <img
            src={me}
            alt=""
            className="aspect-[4/5] w-full translate-x-5 -rotate-3 rounded-lg object-cover transition-all duration-300 ease-out hover:rotate-0 hover:scale-105 hover:drop-shadow-[0px_12px_23px_#34d399]"
          />
          <div className="absolute -right-16 top-8 z-20 lg:-right-20">
            <div className="relative">
              <BiArrow90degRight className="size-[4.5rem] rotate-[170deg] text-[#34d399] lg:size-[6rem] dark:drop-shadow-[0px_0px_2px_black]" />
              <span className="absolute -right-5 -top-10 text-3xl lg:-top-16 lg:text-5xl dark:text-white dark:drop-shadow-[0px_0px_2px_#34d399]">
                Me
              </span>
            </div>
          </div>
          <div className="absolute -bottom-7 right-[16%] z-20 lg:-bottom-3">
            <div className="relative">
              <BiArrow90degRight className="size-[4.5rem] rotate-[14deg] text-[#34d399] lg:size-[6rem] dark:drop-shadow-[0px_0px_2px_black]" />
              <span className="absolute -bottom-8 right-8 text-3xl lg:text-5xl dark:text-white dark:drop-shadow-[0px_0px_2px_#34d399]">
                Ninja
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <MaterialSymbolsPersonalPlacesRounded className="mb-2 size-[5rem] text-[#34d399]" />
        <p className="text-lg text-zinc-800 dark:text-zinc-400">
          Saat ini, saya tinggal di{" "}
          <span className="font-semibold dark:text-white">
            Bandung, West Java.
          </span>
        </p>
      </div>
      <div className="">
        <MaterialSymbolsLanguage className="mb-2 size-[5rem] text-[#34d399]" />
        <ul>
          <li className="text-lg dark:text-zinc-400">
            Saya berbicara{" "}
            <span className="font-semibold dark:text-white">
              Indonesian <TwemojiFlagIndonesia className="inline" />
            </span>{" "}
            sebagai bahasa sehari-hari saya.
          </li>
          <li className="text-lg dark:text-zinc-400">
            Saya juga berbicara .{" "}
            <span className="font-semibold dark:text-white">
              English <IconParkEnglish className="inline" />
            </span>{' '}
            tingkat menengah .
          </li>
        </ul>
      </div>
      <div className="">
        <SolarEmojiFunnySquareBoldDuotone className="mb-2 size-[5rem] text-[#34d399]" />
        <p className="text-lg">
        Hobi saya adalah{" "}
          <span className="font-semibold dark:text-white">
            koding <MaterialSymbolsCodeBlocksRounded className="inline" />
          </span>{" "}
          dan{" "}
          <span className="font-semibold dark:text-white">
            membaca buku <MaterialSymbolsBook4Rounded className="inline" />
          </span>
        </p>
      </div>
    </div>
  );
}
