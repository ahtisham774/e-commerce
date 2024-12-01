import React from "react"

const Dialog = React.forwardRef(({ open, children, ...props }, ref) => {
  if (!open) return null

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-50 overflow-y-auto"
      {...props}
    >
      {children}
    </div>
  )
})
Dialog.displayName = "Dialog"

export { Dialog }

