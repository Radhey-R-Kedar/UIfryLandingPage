import Image from "next/image";
import Logo from "@/app/assets/icons/logo.png";

const Navabar = () => {
  return (
    <nav className="flex items-center justify-center w-[100%] h-[60px] mt-5 z-20">
      <div className="flex items-center justify-between w-[80%]">
        <div className="flex items-center justify-between text-black font-semibold">
          <span className="flex justify-between items-center ">
            <Image src={Logo} alt="logo" width={34} height={34} />
            <h1 className="text-black font-bold text-2xl ml-2">Uifry</h1>
          </span>
          <a
            className="text-[20px] ml-2 text-center w-[90px] focus:text-orange-600"
            href="#"
          >
            Home
          </a>
          <a
            className="text-[20px] ml-2 text-center w-[90px] focus:text-orange-600"
            href="#"
          >
            About us
          </a>
          <a
            className="text-[20px] ml-2 text-center w-[90px] focus:text-orange-600"
            href="#"
          >
            Pricing
          </a>
          <a
            className="text-[20px] ml-2 text-center w-[90px] focus:text-orange-600"
            href="#"
          >
            Features
          </a>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Download
        </button>
      </div>
    </nav>
  );
};

export default Navabar;
