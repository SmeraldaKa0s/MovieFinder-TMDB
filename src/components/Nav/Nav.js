import { Link } from "react-router-dom";
import { BiHomeAlt as HomeIcon } from "react-icons/bi";
import { AiOutlineVideoCamera as CameraIcon } from "react-icons/ai";
import { MdMonitor as MonitorIcon } from "react-icons/md";
import Search from "../Search";
import Translate from "../Translate";

const Navbar = () => {
  return (
    <nav className="flex h-36 bg-gradient-to-t from-transparent to-red-700 items-center justify-between">
      <ul className="flex text-4xl">
        <Link to="/" className="px-2">
          <li>
            <HomeIcon />
          </li>
        </Link>
        <Link to="/movies" className="px-2">
          <li>
            <CameraIcon />
          </li>
        </Link>
        <Link to="/series" className="px-2">
          <li>
            <MonitorIcon />
          </li>
        </Link>
        <Search />
      </ul>
      <div>
        <Translate />
      </div>
    </nav>
  );
};

export default Navbar;
