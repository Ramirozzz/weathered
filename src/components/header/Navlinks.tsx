import { IoSearch } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { GrFavorite } from "react-icons/gr";

const Navlinks = () => {
  return (
    <ul className="flex items-center gap-0 md:gap-2 lg:gap-4">
      <li>
        <button
          type="button"
          aria-label="Favorites"
          className="text-muted rounded-full p-2 transition-colors hover:bg-white/10"
        >
          <GrFavorite size={24} />
        </button>
      </li>

      <li>
        <button
          type="button"
          aria-label="Search"
          className="text-muted rounded-full p-2 transition-colors hover:bg-white/10"
        >
          <IoSearch size={24} />
        </button>
      </li>

      <li>
        <button
          type="button"
          aria-label="Use current location"
          className="text-muted rounded-full p-2 transition-colors hover:bg-white/10"
        >
          <ImLocation size={22} />
        </button>
      </li>
    </ul>
  );
};

export default Navlinks;
