import { useSearchParams } from 'react-router-dom'
import Slider from '../components/authentication/slider'
import { API_URL } from '../components/API'
import { useEffect, useState } from 'react'
import showToast from '../utils/showToast'

const EmailVerify = () => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (token) {

      const verifyEmail = async () => {
        setLoading(true)
        try {
          fetch(`${API_URL}/verifyEmail/${token}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then(data => {
              console.log(data)
              showToast(data.message)
              setMessage(data.message)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        } catch (error) {
          console.log(error)
        }
      }
      verifyEmail()
    }
    else{
      setMessage('Invalid token')
    }
  }, [token])

  return (
    <div className='grid grid-cols-1 md:grid-cols-[45%_55%] w-full min-h-screen h-full gap-8 md:gap-0'>
      <Slider />
      <div className='flex flex-col items-center w-full h-full justify-between gap-5  p-4 lg:p-8'>
        {loading ? (
          <div className='fixed w-screen min-h-screen h-full grid place-items-center'>
            <div className='animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-[#ed1270]'></div>
          </div>
        ) : (
          <div className='flex flex-col gap-5 lg:max-w-sm w-full h-full flex-1  justify-center'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl font-bold '>Verify your Email</h1>
              <p className='text-sm text-[#64748B] font-normal'>
                {message}
              </p>
            </div>
            <form className='flex flex-col gap-5 w-full my-3'>
              <button
                type='button'
                className='p-3 bg-[#EEDFE2] text-base font-semibold rounded-md focus:outline-none'
              >
                Skip Now
              </button>
            </form>
            <div className='flex items-center justify-start gap-2 text-sm'>
              <p className=' font-normal'>Don’t receive an email?</p>
              <button type='button' className='font-semibold text-[#ED0A8A]'>
                Resend
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EmailVerify
