
import toast from 'react-hot-toast'

const showToast = (text) => {
  return (
    toast(() => <span>{text}</span>)
  )
}

export default showToast