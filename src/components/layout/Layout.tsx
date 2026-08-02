import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
