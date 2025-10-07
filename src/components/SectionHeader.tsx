import { PropsWithChildren } from "react"

type Props = {
  description: string
}

export const SectionHeader = ({ description, children }: PropsWithChildren<Props>) => {
  return (
    <div>
      {children}
      <p className="text-center lg:text-left text-[#B3B3B3] font-light text-sm lg:text-base mt-4 lg:max-w-5xl">{description}</p>
    </div>
  )
}
