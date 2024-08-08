/* eslint-disable react/prop-types */
export default function Detail({ data }) {
  const K = data?.main?.temp;
  const C = Math.ceil(K - 273.15);
  return (
    <div className="bg-purple-300/30 p-4 rounded-large backdrop-blur-[2px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] shadow-white w-96 h-96 text-white flex justify-center items-center flex-col">
      <p className="font-bold text-[90px]">{C}</p>
      <p className="font-semibold text-2xl">{data?.name}</p>
      <p className=" text-xl">{data?.weather[0]?.main}</p>
    </div>
  );
}
