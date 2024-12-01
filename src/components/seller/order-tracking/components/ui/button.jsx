import React from "react"

const Button = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-200 hover:bg-gray-50",
  }

  return (
    <button
      ref={ref}
      className={`
        inline-flex items-center justify-center rounded-lg px-4 py-2
        text-sm font-medium transition-colors focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        disabled:opacity-50 disabled:pointer-events-none
        ${variants[variant]}
        ${className}
      `}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }

