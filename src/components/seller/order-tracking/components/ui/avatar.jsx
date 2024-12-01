import React from "react"

const Avatar = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative flex shrink-0 overflow-hidden rounded-full ${className}`}
      {...props}
    />
  )
})
Avatar.displayName = "Avatar"

export { Avatar }

