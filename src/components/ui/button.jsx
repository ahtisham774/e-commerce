

export const Button = ({ children, variant = 'default', ...props }) => {
  const baseStyles = 'inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
  const variantStyles = {
    default: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
    primary: 'border-transparent text-white bg-indigo-600 hover:bg-indigo-700',
    secondary: 'border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200',
  }

  return (
    <button
      type="button"
      className={`${baseStyles} ${variantStyles[variant]}`}
      {...props}
    >
      {children}
    </button>
  )
}

