import { Image } from "@unpic/react";
import { MethodPaymentInterface } from "../../interfaces/MethodPaymentInterface";

export function MethodCard ({ method }: { method: MethodPaymentInterface }) {
  return (
    <div className="max-w-[350px] h-auto w-full min-w-[250px] p-5 bg-[#202020] rounded-lg text-white shadow-xl shadow-black/60">
      <Image 
        src={method.url}
        width={340}
        height={340}
        className="w-[350px] h-[290px] object-cover rounded-lg"
      />
      <div className="py-8">
        <h3 className="text-center font-medium text-xl">{method.method_name}</h3>
      </div>
    </div>
  )
}