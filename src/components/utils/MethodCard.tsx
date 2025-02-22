import { Image } from "@unpic/react";
import { MethodPaymentInterface } from "../../interfaces/MethodPaymentInterface";

export function MethodCard ({ method }: { method: MethodPaymentInterface }) {
  return (
    <div className="max-w-[190px] flex gap-5 items-center h-auto w-full rounded-lg text-black">
      <Image 
        src={method.url}
        width={340}
        height={340}
        className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] object-cover rounded-lg"
      />
      <div className="py-8">
        <h3 className="text-center font-medium text-base lg:text-xl">{method.method_name}</h3>
      </div>
    </div>
  )
}