import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";

const Layout = () => {
  return (
    <div className="relative z-10 min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 bg-black/50" />

      <div className="grid min-h-screen grid-rows-[auto_1fr_auto] px-4 md:px-8 lg:px-16">
        <header>
          <Navbar />
        </header>

        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
