import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

function Footer() {

  return (
    <footer className="bg-green-900 text-white text-center py-12 md:py-16 mt-12 md:mt-16 px-4">

      <h2 className="text-3xl sm:text-5xl md:text-[4rem] text-white font-bold transition-all duration-300">
        KeenKeeper
      </h2>

      <p className="text-sm md:text-base leading-6 mt-3 opacity-80 max-w-2xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      {/* Social */}
      <div className="mt-8">
        <h3 className="text-lg md:text-[1.25rem] font-semibold">Social Links</h3>

        <div className="flex justify-center gap-4 mt-5">

          <button className="btn btn-circle bg-white text-[#244D3F] hover:scale-110 transition">
            <AiFillInstagram size={24} />
          </button>

          <button className="btn btn-circle bg-white text-[#244D3F] hover:scale-110 transition">
            <FaFacebook size={24} />
          </button>

          <button className="btn btn-circle bg-white text-[#244D3F] hover:scale-110 transition">
            <BsTwitterX size={24} />
          </button>

        </div>
      </div>

      <hr className="mt-10 border border-green-400 opacity-20" />

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-4 md:px-16 lg:px-24 mt-6 text-sm opacity-70">

        <p>
          &copy; 2026 KeenKeeper. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <p className="hover:text-white cursor-pointer transition">Privacy Policy</p>
          <p className="hover:text-white cursor-pointer transition">Terms of Service</p>
          <p className="hover:text-white cursor-pointer transition">Cookies</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;