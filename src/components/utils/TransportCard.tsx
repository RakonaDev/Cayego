import { Image } from "@unpic/react";
import { SpaceInterface } from "../../interfaces/SpaceInterface";
import { TbArmchair } from "react-icons/tb";

export default function TransportCard({ transport }: { transport: SpaceInterface }) {
  return (
    <div className="max-w-[650px] w-full min-w-[250px] flex gap-5 lg:flex-row flex-col max-lg:items-center">
      <div>
        <Image 
          src={ transport.url }
          width={450}
          height={300}
          className="max-w-[450px] w-full h-[300px] object-cover rounded-lg"
        />
      </div>
      <div className="h-full flex flex-col justify-center space-y-5">
        <h3 className="text-2xl font-bold font-clean_deco text-redPrimary max-lg:text-center">{ transport.name_car }</h3>
        <div className="flex gap-2 items-center max-lg:flex-col">
          <span><TbArmchair size={45} /></span>
          <span className="font-bold text-lg">{transport.space} asientos</span>
        </div>
      </div>
    </div>
  )
}