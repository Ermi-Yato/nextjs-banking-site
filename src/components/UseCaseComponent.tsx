import { IConBackground } from "@/components/ui/IconBackground"
import { StaticImageData } from "next/image"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { useCasesType, statsType, useCasesSectionsType } from "./sections/home/Use-cases"

type UseCaseComponentProps = {
  useCases: useCasesType,
  stats: statsType,
  useCasesSections: useCasesSectionsType,
  backgroundImage: StaticImageData,
  imageClassName?: string,
  className?: string
}


export const UseCaseComponent = ({ useCases, stats, useCasesSections, backgroundImage, imageClassName, className }: UseCaseComponentProps) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center mt-4">
      <div className={className}>
        <div className="bg-[#1C1C1C] p-5 lg:p-7 rounded-2xl mt-12 grid grid-cols-2 grid-rows-2 gap-3 relative">

          <Image
            src={backgroundImage}
            alt="background pattern"
            className={imageClassName || "absolute size-36 lg:size-52 z-0"}
          />

          {useCases.map(useCase => (
            <div key={useCase.usecase} className="bg-[#191919] border border-[#262626] py-4 lg:py-8 lg:px-12 px-3 text-sm flex flex-col justify-center gap-4 rounded-2xl z-10">
              <IConBackground>
                <Image src={useCase.icon} alt="icon" />
              </IConBackground>
              <span className="text-center text-sm lg:text-base">{useCase.usecase}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {useCasesSections.map(useCasesSection => (
          <div key={useCasesSection.title}>
            <h3 className="font-medium text-xl text-center lg:text-left mt-10">{useCasesSection.title}</h3>
            <p className="text-center lg:text-left text-[#B3B3B3] font-light mt-4 text-sm lg:text-base">
              {useCasesSection.description}
            </p>
          </div>
        ))}


        <div className="mt-14 lg:flex lg:flex-row">
          {stats.map(stat => (
            <div key={stat.caption} className="flex flex-col justify-center lg:items-start items-center py-8 max-w-xs mx-auto gap-3">
              <span className="text-[#CAFF33] text-4xl">{stat.percentage}</span>
              <span className="font-light text-sm lg:text-base text-[#B3B3B3] lg:max-w-[150px]">{stat.caption}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center lg:justify-start mt-12">
          <Button btnType="secondary" size="lg" className="border-[#262626] border bg-[#1C1C1C]">Learn More</Button>
        </div>
      </div>
    </div>
  )
}
