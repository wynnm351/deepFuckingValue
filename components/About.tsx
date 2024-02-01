import Image from "next/image";

export default function About() {
  return (
    <div className="bg-milkWhite text-customBlack">
      <div className=" py-32 max-w-[65rem] space-y-24 md:space-y-0  mx-auto text-customBlack flex flex-col  md:flex-row">
        <div className=" w-full px-5 md:px-0 md:ml-5 text-center flex justify-center items-start ">
          <Image
            src={"/keith-gill.gif"}
            className=" w-80 "
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="w-full px-5 md:px-0 md:mr-5 text-center">
          <h1 className=" text-6xl sm:text-7xl about-text font-bold font-kurri">
            $Deep Solana <br /> Memecoin
          </h1>
          <p className="mt-12 ">
            This {"isn't"} just a cryptocurrency; {"it's"} a movement, Who
            started this GameStop madness? A Reddit user by the name
            u/deepfuckingvalue is the first known Redditor to pile into that
            trade. He opened his position in June 2019. One and half years
            later, {"it's"} a frenzy, a wild and mad rally. For any normal
            person, this trade {"doesn't"} make sense at all and has never made
            sense. But for this guy, the trade makes a lot of sense. He has
            continued to hold for such a long period. This movement is
            different, there will be no halts, no restrictions, no market
            manipulation. The $DEEP Solana memecoin is 100% decentralized and
            100% community owned. We are the new standard.
          </p>
        </div>
      </div>
    </div>
  );
}
