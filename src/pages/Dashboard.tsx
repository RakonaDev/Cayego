import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="bg-[#CCCCCC] h-dvh text-white flex">
      <div className="w-1/4 h-dvh"></div>
      <main className="py-10 px-20 space-y-20">
        <h1 className="text-black font-bold text-3xl">Dashboard</h1>
        <article className="flex flex-wrap">
          <Link to='/admin/servicios' className="max-w-lg flex flex-col items-center w-full bg-black shadow-lg shadow-black/50 rounded-xl p-7 px-10 h-auto space-y-6 text-redPrimary">
            <FaCar size={75} />
            <h2 className="text-white font-bold text-2xl">Servicios</h2>
          </Link>
        </article>
      </main>

    </div>
  )
}