import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";

const Layout = () => {
  return (
    <div className="relative z-10 min-h-screen grid grid-rows-[auto_1fr_auto] px-6 md:px-16  mx-auto">
      <div className="absolute inset-0 bg-black/50 " />
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
