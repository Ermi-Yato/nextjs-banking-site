import { cva } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react"

const buttonClasses = cva("px-6 rounded-full", {
  variants: {
    btnType: {
      primary: "bg-[#CAFF33] text-[#1c1c1c]",
      secondary: "text-white"
    },
    size: {
      sm: "h-10",
      md: "h-11",
      lg: "h-12"
    }
  }
})

export const Button = (props: { btnType: 'primary' | 'secondary', size?: 'sm' | 'md' | 'lg' } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { btnType, className, size, ...otherProps } = props
  return (
    <button
      className={buttonClasses({
        btnType,
        size,
        className
      })}
      {...otherProps}
    />
  )
}
