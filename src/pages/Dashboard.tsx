import { FaCar } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="bg-[#222529] h-dvh text-white flex">
      <div className="w-1/4 h-dvh"></div>
      <main className="py-5 px-5 space-y-20 w-3/4 h-dvh">
        <div className=" w-full h-auto rounded-xl p-4">
          <h1 className="text-white font-bold text-3xl">Dashboard</h1>
          <article className="flex flex-wrap mt-10 gap-10">
            <Link to='/admin/servicios' className="max-w-[200px] flex flex-col items-center w-full bg-[#0D1116] shadow-lg shadow-black/50 rounded-xl p-7 px-10 h-auto space-y-6 text-redPrimary hover:bg-[#0D1116]/90 transition-all duration-500">
              <FaCar size={75} />
              <h2 className="text-white font-bold text-2xl">Servicios</h2>
            </Link>
            <Link to='/admin/informacion' className="max-w-[200px] flex flex-col items-center w-full bg-[#0D1116] shadow-lg shadow-black/50 rounded-xl p-7 px-10 h-auto space-y-6 text-redPrimary hover:bg-[#0D1116]/90 transition-all duration-500">
              <LuInfo size={75} />
              <h2 className="text-white font-bold text-2xl">Información</h2>
            </Link>
          </article>
        </div>
      </main>

    </div>
  )
}