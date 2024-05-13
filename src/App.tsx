import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-black min-h-dvh px-6 lg:px-[27%] py-4">
      <Header path={location.pathname} />
      <Outlet />
      <Footer />
    </div>
  );
}