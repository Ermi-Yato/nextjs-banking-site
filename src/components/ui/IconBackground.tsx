import { PropsWithChildren } from "react"

export const IConBackground = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center">
      <div className="inline-flex justify-center [mask-image:linear-gradient(to_bottom,black_10%,black_70%,transparent)] px-2 py-2 rounded-full bg-[#CAFF33]/5">
        <div className="bg-gradient-to-b from-[#CAFF33]/20 to-[#CAFF33]/10 px-3 py-3 rounded-full border border-[#CAFF33]/20">
          {children}
        </div>
      </div>
    </div>
  )
}
