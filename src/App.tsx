import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { isDarkModeAtom } from "@/store/darkModePreference";

import { useAtomValue } from "jotai";
import { useEffect } from "react";

export default function App() {
  const location = useLocation();
  const isDarkMode = useAtomValue(isDarkModeAtom);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-dvh bg-white z-20 px-6 py-4 lg:px-[27%] dark:bg-black relative">
      <Header path={location.pathname} />
      <Outlet />
      <Footer />
    </div>
  );
}
