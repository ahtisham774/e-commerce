

export const Badge = ({ children, variant = '' }) => {
  const baseStyles = 'inline-flex items-center p-3 rounded-lg text-xs font-medium'
 

  return (
    <span className={`${baseStyles}`} style={{background:variant}}>
      {children}
    </span>
  )
}

