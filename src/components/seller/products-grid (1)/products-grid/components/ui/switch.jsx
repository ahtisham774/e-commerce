import React from "react"

const Switch = React.forwardRef(({ className, checked, ...props }, ref) => {
  return (
    <button
      ref={ref}
      role="switch"
      aria-checked={checked}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full
        transition-colors
        ${checked ? 'bg-pink-500' : 'bg-gray-200'}
        ${className}
      `}
      {...props}
    >
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-white
          transition-transform
          ${checked ? 'translate-x-6' : 'translate-x-1'}
        `}
      />
    </button>
  )
})
Switch.displayName = "Switch"

export { Switch }

