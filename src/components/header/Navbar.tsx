import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-20 py-6 md:py-8 lg:py-10 px-4 md:px-8 lg:px-16 animate-fade-down">
      <div className="flex items-center justify-between pb-8">
        <a
          href="/"
          className="text-lg md:text-xl uppercase tracking-wider text-muted transition-opacity hover:opacity-80"
        >
          Weathered
        </a>
        <Navlinks />
      </div>
    </nav>
  );
};

export default Navbar;
