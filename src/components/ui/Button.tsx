import { cva } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react"

const buttonClasses = cva("px-6 rounded-full cursor-pointer text-sm", {
  variants: {
    btnType: {
      primary: "bg-[#CAFF33] text-[#1c1c1c]",
      secondary: "text-white"
    },
    size: {
      sm: "h-10",
      md: "h-11",
      lg: "h-12"
    },
    dropShadow: {
      yes: "hover:drop-shadow-[0_0_5px_rgba(202,255,51,0.5)] hover:scale-102 transition-all duration-200 hover:outline hover:outline-[#CAFF33]",
      no: ""
    }
  }
})

export const Button = (props: { btnType: 'primary' | 'secondary', size?: 'sm' | 'md' | 'lg', dropShadow?: 'yes' | 'no' } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { btnType, className, size, dropShadow, ...otherProps } = props
  return (
    <button
      className={buttonClasses({
        btnType,
        size,
        dropShadow,
        className,
      })}
      {...otherProps}
    />
  )
}
