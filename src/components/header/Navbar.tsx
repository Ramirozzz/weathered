import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className=" flex h-20 items-center justify-between  py-12 px-4 md:px-8 lg:px-16">
        <a
          href="/"
          className="text-xl font-semibold uppercase tracking-wide text-muted transition-opacity hover:opacity-80"
        >
          Weathered
        </a>

        <Navlinks />
      </div>
    </nav>
  );
};

export default Navbar;
