import { ReactNode } from "react";

export default function Container ({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto lg:px-10 md:px-4 px-2 z-20 relative">
      { children }
    </div>
  )
}