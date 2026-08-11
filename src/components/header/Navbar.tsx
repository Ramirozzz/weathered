import { useLocation } from "../../context/LocationContext";
import { IoSearch } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import SearchBar from "../search/SearchBar";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { findMyLocation } = useLocation();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-20 px-4 py-6 animate-fade-down md:px-8 md:py-8 lg:px-16 lg:py-10">
      <div className="relative flex items-center justify-between pb-6">
        <a
          href="/"
          className="text-lg uppercase tracking-wider text-muted transition-opacity hover:opacity-80 md:text-xl"
        >
          Weathered
        </a>

        {/* Mobile search */}
        <div
          className={`absolute left-0 right-0 top-full px-4 md:hidden ${
            showSearchBar
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0 pointer-events-none"
          } transition-all duration-300 ease-out`}
        >
          <SearchBar className="w-full py-2" />
        </div>

        {/* Desktop search */}
        <div className="relative flex shrink-0 items-center gap-3 md:gap-4 lg:gap-5">
          <div
            className={`absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 origin-right overflow-visible transition-all duration-300 ease-out md:block ${
              showSearchBar
                ? "translate-x-0 scale-x-100 opacity-100"
                : "pointer-events-none translate-x-3 scale-x-0 opacity-0"
            }`}
          >
            <SearchBar className="w-80 py-2" />
          </div>

          <button
            type="button"
            aria-label={showSearchBar ? "Close search" : "Open search"}
            onClick={() => setShowSearchBar((prev) => !prev)}
            className="relative z-50 shrink-0 text-muted transition-colors hover:text-text"
          >
            {showSearchBar ? <IoClose size={25} /> : <IoSearch size={25} />}
          </button>

          <button
            type="button"
            onClick={findMyLocation}
            aria-label="Use current location"
            className="relative z-50 shrink-0 rounded-full text-accent"
          >
            <FaLocationArrow
              size={20}
              className="transition-all duration-300 hover:text-text"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
