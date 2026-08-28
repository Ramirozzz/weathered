import { useLocation } from "../../context/LocationContext";
import { IoSearch } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import SearchBar from "../search/SearchBar";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
// import logo from "../../assets/images/logo3.png";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { findMyLocation } = useLocation();

  const handleCompletedSearch = () => {
    setShowSearchBar(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-20 px-4 py-6 animate-fade-down md:px-8 md:py-8 lg:px-16 lg:py-10">
      <div className="relative flex items-center justify-between pb-6">
        <a href="/">
          {/* <div className="w-7 h-5">
            <img src={logo} className="w-full" alt="logo" />
          </div> */}

          <span className="text-lg md:text-xl uppercase tracking-widest text-muted transition-opacity hover:opacity-80">
            Weathered
          </span>
        </a>

        {/* Mobile search */}
        <div
          className={`absolute left-0 right-0 top-full md:hidden ${
            showSearchBar
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0 pointer-events-none"
          } transition-all duration-300 ease-out`}
        >
          <SearchBar
            className="w-full py-4"
            onCompletedSearch={handleCompletedSearch}
          />
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
            <SearchBar
              className="w-80 py-2"
              onCompletedSearch={handleCompletedSearch}
            />
          </div>

          <button
            type="button"
            aria-label={showSearchBar ? "Close search" : "Open search"}
            onClick={() => setShowSearchBar((prev) => !prev)}
            className="relative z-50 shrink-0 text-muted transition-colors hover:text-text"
          >
            {showSearchBar ? <IoClose size={26} /> : <IoSearch size={26} />}
          </button>

          <div className="group relative pt-1.5">
            <button
              type="button"
              onClick={findMyLocation}
              aria-label="Use current location"
              className="relative z-50 shrink-0 rounded-full text-muted transition-colors duration-300 hover:text-text"
            >
              <FaLocationArrow size={18} />
            </button>

            <span className="pointer-events-none absolute right-0 top-full z-50 mt-2 whitespace-nowrap border border-border rounded-md bg-white/6 px-3 py-1.5 text-xs text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              Use my location
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
