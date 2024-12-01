import React from "react"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-white text-gray-900 hover:bg-gray-50",
    ghost: "hover:bg-gray-100",
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3",
    icon: "h-10 w-10",
  }

  return (
    <button
      ref={ref}
      className={`
        inline-flex items-center justify-center rounded-lg
        text-sm font-medium transition-colors
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-gray-950 focus-visible:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }

