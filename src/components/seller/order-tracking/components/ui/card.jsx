import React from "react"

const Card = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-xl border bg-white shadow-sm ${className}`}
      {...props}
    />
  )
})
Card.displayName = "Card"

export { Card }

