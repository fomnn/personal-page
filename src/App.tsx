import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import isDarkModeAtom from "@/store/darkModePreference";

import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { useMouse } from "@reactuses/core";

export default function App() {
  const { pageX, pageY } = useMouse();
  // const location = useLocation();
  const isDarkMode = useAtomValue(isDarkModeAtom);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="relative z-20 min-h-dvh bg-white px-6 py-4 lg:px-[27%] dark:bg-black overflow-x-hidden">
      <div
        className="mouseBackground absolute size-[12rem] rounded-full -translate-x-1/2 -translate-y-1/2 -z-30"
        style={{ left: pageX, top: pageY }}
      ></div>
      {/* <Header path={location.pathname} /> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
