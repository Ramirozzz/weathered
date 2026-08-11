import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-6 mt-20 ">
      <div className="flex items-center justify-between pb-1">
        <a
          href="/"
          className="text-lg uppercase tracking-wider text-muted transition-opacity hover:opacity-80"
        >
          Weathered
        </a>
        {/* <Navlinks /> */}
      </div>
      <p className="text-xs mt-4">2026. Designed & Built by Rami Balaghi</p>
    </div>
  );
};

export default Footer;
