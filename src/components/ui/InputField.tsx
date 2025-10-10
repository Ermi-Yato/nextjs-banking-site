const inputClasses = "flex-1 bg-transparent outline-none placeholder:font-light placeholder:text-[#59595A] text-sm text-[#B3B3B3]"

type Input = {
  type: string,
  name: string,
  placeholder: string,
}

export const InputField = ({ type, name, placeholder }: Input) => {
  return (
    <div className="p-4 lg:p-5 rounded-full bg-[#191919] border border-[#262626] flex items-center">
      <input type={type} name={name} placeholder={placeholder} required className={`${inputClasses} w-full`} />
    </div>
  )
}
