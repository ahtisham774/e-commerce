import React from "react"

const Select = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={`
        h-10 rounded-lg border border-gray-200 bg-white
        px-3 py-2 text-sm focus:outline-none focus:ring-2
        focus:ring-gray-950 focus:ring-offset-2
        ${className}
      `}
      {...props}
    />
  )
})
Select.displayName = "Select"

export { Select }

