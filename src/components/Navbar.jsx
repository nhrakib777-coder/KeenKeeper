import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";

import { IoMdTime } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";

function Navbar() {
  return (
    <div className="navbar bg-white px-8 py-4">
      <div className="flex-1 text-[1.5rem] text-[#1f2937] font-bold">
        Keen<span className="font-semibold text-[#244D3F]">Keeper</span>
      </div>

      <div className="flex gap-4">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `btn ${isActive ? "bg-[#244D3F] text-white" : "btn-ghost text-[#64748B] font-medium"}`
          }
        >
          <FiHome size={18}/>
          Home
        </NavLink>

        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `btn ${isActive ? "bg-[#244D3F] text-white" : "btn-ghost text-[#64748B]"}`
          }
        >
          <IoMdTime size={18} /> Timeline
        </NavLink>

        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `btn ${isActive ? "bg-[#244D3F] text-white" : "btn-ghost text-[#64748B]"}`
          }
        >
          <ImStatsDots size={16} /> Stats
        </NavLink>

      </div>
    </div>
  );
}

export default Navbar;