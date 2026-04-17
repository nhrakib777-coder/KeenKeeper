import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";

function Navbar() {
  return (
    <div className="navbar bg-white px-4 md:px-8 lg:px-12 py-4 flex flex-col md:flex-row gap-4 md:gap-0 items-center shadow-sm">

      {/* Logo */}
      <div className="flex-1 text-2xl md:text-3xl text-[#1f2937] font-bold text-center md:text-left tracking-wide transition-all duration-300 hover:tracking-wider">
        Keen<span className="font-semibold text-[#244D3F]">Keeper</span>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `btn btn-sm md:btn-md flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md ${
              isActive
                ? "bg-[#244D3F] text-white shadow-md"
                : "btn-ghost text-[#64748B] font-medium hover:text-[#244D3F]"
            }`
          }
        >
          <FiHome size={18} />
          Home
        </NavLink>

        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `btn btn-sm md:btn-md flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md ${
              isActive
                ? "bg-[#244D3F] text-white shadow-md"
                : "btn-ghost text-[#64748B] hover:text-[#244D3F]"
            }`
          }
        >
          <IoMdTime size={18} />
          Timeline
        </NavLink>

        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `btn btn-sm md:btn-md flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md ${
              isActive
                ? "bg-[#244D3F] text-white shadow-md"
                : "btn-ghost text-[#64748B] hover:text-[#244D3F]"
            }`
          }
        >
          <ImStatsDots size={16} />
          Stats
        </NavLink>

      </div>
    </div>
  );
}

export default Navbar;