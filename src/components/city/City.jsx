import { useQuery } from "@tanstack/react-query";
import Detail from "../detail/Detail";
import Status from "../status/Status";
import axios from "axios";

export default function City() {
  async function queryFn() {
    try {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?lat=51.5073219&lon=-0.1276474&appid=7094ba1f421eb17cf9ab1b1781e963dc"
      );
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn,
  });
  console.log(data);
  return (
    <div className="flex justify-center items-center gap-4 bg-[#5D69F6] min-h-screen bg-[url('/bg.svg')] bg-cover">
      <Detail data={data} />
      <Status />
    </div>
  );
}
