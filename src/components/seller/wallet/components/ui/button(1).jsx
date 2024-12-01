import React from "react"

const Button = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-white text-gray-900 hover:bg-gray-50",
    outline: "border-2 bg-transparent",
  }

  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }

