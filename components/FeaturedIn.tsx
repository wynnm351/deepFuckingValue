import Image from "next/image";
import { BiLogoTelegram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export default function FeaturedIn() {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="bg-[#0A0A0A] max-w-[65rem] mx-auto py-20 flex flex-col items-center text-white">
        <h2 className="text-6xl uppercase font-kurri font-bold about-text">
          As Featured In
        </h2>
        <div className="uppercase items-center gap-6 px-10 flex-wrap flex mt-28 text-5xl justify-center sm:justify-between w-full">
          <p>Yahoo</p>
          <p>Benzinga</p>
          <p>
            Digital <br /> Journey
          </p>
        </div>
        <div className="mt-28 flex px-10 items-start">
          <div className=" w-[45%]  relative z-50 flex-col pr-9 gap-5   flex justify-center items-center   ">
            <div className="relative">
              <Image
                className="relative"
                src={"/mg.png"}
                width={500}
                height={500}
                alt="mg"
              />
              <div className="absolute sm:gap-4 w-full flex flex-col items-center top-[50%] left-[50%] -translate-x-[55%] -translate-y-[50%] ">
                <p className="font-kurri text-xl sm:text-3xl lg:text-5xl  about-token">
                  Follow us
                </p>
                <div className="flex gap-4  items-center text-black">
                  <div className="md:p-1.5 text-lg md:text-2xl hover:scale-110 cursor-pointer rounded-md bg-[#1fe0b0]">
                    <FaXTwitter />
                  </div>
                  <div className="md:p-1.5 p-1 flex text-lg md:text-2xl hover:scale-110 cursor-pointer rounded-full bg-[#1fe0b0]">
                    <BiLogoTelegram />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[65%]  z-[10]">
            <Image
              className="object-cover w-[30rem] md:w-[65rem]"
              src={"/about.png"}
              width={500}
              height={500}
              alt="about"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
