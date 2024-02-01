export default function Tokenomics() {
  return (
    <div className="bg-milkWhite  flex flex-col items-center py-24 text-customBlack ">
      <h1 className="uppercase text-6xl font-kurri about-text ">Tokenomics</h1>
      <div className="px-7 py-9 bg-gray-950 shadow-lg rounded-md">
        <p className="text-3xl about-token font-kurri mb-6">About Token</p>
        <div className="space-y-2 text-gray-500">
          <p className="flex  gap-4 justify-between">
            Token Name:{" "}
            <span className="about-token font-kurri">Deep Fucking value</span>{" "}
          </p>
          <p className="flex  justify-between">
            Token Symbol: <span className="about-token font-kurri">$DEPP</span>
          </p>
          <p className="flex justify-between">
            Total Supply:{" "}
            <span className="about-token font-kurri">100.000.000</span>
          </p>
          <p className="flex justify-between">
            Taxes: <span className="about-token">0%</span>
          </p>
          <p className="flex justify-between">
            Token Address:{" "}
            <span className="about-token font-kurri text-xl">$DEEP</span>
          </p>
        </div>
      </div>
    </div>
  );
}
