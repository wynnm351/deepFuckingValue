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
    <div className="flex  fixed  w-full items-center py-7 px-5 sm:px-16   bg-customBlack text-white justify-between">
      <div className="w-20 h-20 bg-red-200 rounded-full">
        <Image src={"/about.png"} width={500} height={500} alt="logo" />
      </div>
      <div className=" hidden md:flex gap-5">
        {NavigatonItem.map((item) => (
          <p
            className="text-xl cursor-pointer font-kurri font-thin hover:text-customRed"
            key={item.id}
          >
            {item.labe}
          </p>
        ))}
      </div>
      <div className="flex gap-5 lg:gap-4 items-center text-black">
        <div className="p-1.5 hover:scale-110 cursor-pointer rounded-md bg-customRed">
          <FaXTwitter size={25} />
        </div>
        <div className="p-1.5 hover:scale-110 cursor-pointer rounded-full bg-customRed">
          <BiLogoTelegram size={27} />
        </div>
        <div className="ml-3 block md:hidden ">
          <Hamburger />
        </div>
      </div>
    </div>
  );
}
