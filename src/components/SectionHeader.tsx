export const SectionHeader = (props: { title: string, description: string }) => {
  const { title, description } = props
  return (
    <div>
      <h2 className="text-[#CAFF33] text-3xl lg:text-4xl text-center lg:text-left font-medium">{title}</h2>
      <p className="text-center lg:text-left text-[#B3B3B3] font-light text-sm lg:text-base mt-4">{description}</p>
    </div>
  )
}
