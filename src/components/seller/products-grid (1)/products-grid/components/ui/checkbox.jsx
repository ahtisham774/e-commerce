import React from "react"

const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      type="checkbox"
      ref={ref}
      className={`
        h-4 w-4 rounded border-gray-300
        text-pink-500 focus:ring-pink-500
        ${className}
      `}
      {...props}
    />
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }

