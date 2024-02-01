export default function Tokenomics() {
  return (
    <div className="bg-[#0A0A0A] flex flex-col items-center py-24 text-white ">
      <h1 className="uppercase text-6xl font-kurri about-text ">Tokenomics</h1>
      <div className="px-7 py-9 bg-gray-950 shadow-lg">
        <p className="text-3xl about-token font-kurri mb-6">About Token</p>
        <div className="space-y-2 text-gray-500">
          <p className="flex  gap-4 justify-between">
            Token Name: <span className="text-white">Deep Fucking value</span>{" "}
          </p>
          <p className="flex  justify-between">
            Token Symbol: <span className="text-white">$DEPP</span>
          </p>
          <p className="flex justify-between">
            Total Supply: <span className="text-white">100.000.000</span>
          </p>
          <p className="flex justify-between">
            Taxes: <span className="text-white">0%</span>
          </p>
          <p className="flex justify-between">
            Token Address: <span className="about-token text-xl">$DEEP</span>
          </p>
        </div>
      </div>
    </div>
  );
}
