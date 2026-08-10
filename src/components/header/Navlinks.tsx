import { IoSearch } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
// import { GrFavorite } from "react-icons/gr";

const Navlinks = () => {
  return (
    <ul className="flex items-center gap-3 md:gap-4 lg:gap-5">
      {/* <li>
        <button
          type="button"
          aria-label="Favorites"
          className="text-muted rounded-full p-2 transition-colors hover:bg-white/10"
        >
          <GrFavorite size={24} />
        </button>
      </li> */}
      <a href="/">
        <li>
          <button
            type="button"
            aria-label="Search"
            className="text-muted rounded-full"
          >
            <IoSearch
              size={24}
              className="hover:text-text transition-all duration-300"
            />
          </button>
        </li>
      </a>

      <li>
        <button
          type="button"
          aria-label="Use current location"
          className="text-accent rounded-full"
        >
          <FaLocationArrow
            size={20}
            className=" hover:text-text transition-all duration-300"
          />
        </button>
      </li>
    </ul>
  );
};

export default Navlinks;
