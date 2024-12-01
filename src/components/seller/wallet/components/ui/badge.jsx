import React from "react"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    pending: "bg-[#ED0A8A] text-[#000000]",
    completed: "bg-[#6FCF97] text-[#000000]",
    cancelled: "bg-[#DC1D1D] text-black",
  }

  return (
    <span
      ref={ref}
      className={`inline-flex items-center rounded-xl p-4 px-8 text-base font-bold ${variants[variant]} ${className}`}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }

