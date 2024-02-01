import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import Hamburger from "./Menu";
import Image from "next/image";

export default function NavBar() {
  const NavigatonItem = [
    { labe: "Home", id: "home" },
    { labe: "About", id: "about" },
    { labe: "Tokenomics", id: "tokenomics" },
  ];

  return (
    <div className="flex sm:mx-7 fixed  w-[95%] items-center py-7 px-5 rounded-xl bg-black text-white justify-between">
      <div className="w-16 h-16 bg-red-200 rounded-full"></div>
      <div className=" hidden md:flex gap-5">
        {NavigatonItem.map((item) => (
          <p
            className="text-xl cursor-pointer font-kurri font-thin hover:text-[#1fe0b0]"
            key={item.id}
          >
            {item.labe}
          </p>
        ))}
      </div>
      <div className="flex gap-4 items-center text-black">
        <div className="p-1.5 hover:scale-110 cursor-pointer rounded-md bg-[#1fe0b0]">
          <FaXTwitter size={25} />
        </div>
        <div className="p-1.5 hover:scale-110 cursor-pointer rounded-full bg-[#1fe0b0]">
          <BiLogoTelegram size={27} />
        </div>
        <div className="ml-3 block md:hidden ">
          <Hamburger />
        </div>
      </div>
    </div>
  );
}
