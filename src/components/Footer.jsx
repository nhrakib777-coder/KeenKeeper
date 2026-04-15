import { AiFillInstagram } from "react-icons/ai";

import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

function Footer() {

  return (
    <footer className="bg-green-900 text-white text-center py-16 mt-16">

      <h2 className="text-[4rem] text-white font-bold">
        KeenKeeper
      </h2>

      <p className="text-[1rem] leading-6 mt-2 opacity-80">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      <div>
        <h3 className="text-[1.25rem] font-semibold mt-6">Social Links</h3>
        <div className="flex justify-center gap-4 mt-6">

          <button className="btn btn-circle shadow-none bg-white text-[#244D3F]"><AiFillInstagram size={24} />

          </button>
          <button className="btn btn-circle shadow-none bg-white text-[#244D3F]"><FaFacebook size={24} /></button>
          <button className="btn btn-circle shadow-none bg-white text-[#244D3F]"><BsTwitterX size={24} />
          </button>

        </div>
      </div>
      <hr className="mt-8 border border-green-400 opacity-10" />

      <div className="flex h-10 justify-between items-start px-24">
        <div ><p className="mt-10 text-sm opacity-70">
          &copy; 2026 KeenKeeper. All rights reserved.
        </p></div>
        <div className="flex h-full  justify-between items-center gap-6 text-sm mt-8 opacity-70">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;