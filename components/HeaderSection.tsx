export default function HeaderSection() {
  return (
    <div className="flex text-white pt-48 flex-col items-center min-h-[46.875rem] bg-cover bg-no-repeat bg-[url('/background-1.png')]">
      <p className="uppercase font-light mb-4 text-3xl">
        Never Fucking Selling
      </p>
      <h1 className=" text-7xl text-center md:text-8xl uppercase  tracking-tighter font-kurri header-text mt-5 font-bold">
        Deep Fucking value
      </h1>
      <p className="mt-7">The Deep Fucking Value -$DEEP Solana Memecoin</p>
      <div className="flex font-kurri justify-center px-7 w-full font-thin mt-12 gap-6">
        <button className="button-1 px-5 w-full lg:w-auto py-2 text-lg rounded-md text-black">
          Raydium
        </button>
        <button className="px-5 py-2 text-xl w-full lg:w-auto rounded-md border border-[#1fe0b0] text-[#1fe0b0]">
          DEXSCREENER
        </button>
      </div>
    </div>
  );
}
