import { useState } from 'react'
import Slider from '../components/authentication/slider'
import { FiAlertCircle, FiEye, FiEyeOff } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import { API_URL } from '../components/API'
import showToast from '../utils/showToast'

const Login = () => {
  const [show, setShow] = useState(false)
  const { login , handleFacebook, handleGoogle} = useAuth()
  const [loading, setLoading] = useState(false)
  const [focus, setFocus] = useState({
    email: false,
    password: false
  })
  const [message, setMessage] = useState({
    email: '',
    password: ''
  })
  const [info, setInfo] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    login(info.email, info.password, setLoading)
  }



  return (
    <div className='grid grid-cols-1 md:grid-cols-[45%_55%] w-full min-h-screen h-full gap-8 md:gap-0'>
      <Slider />
      <div className='flex flex-col items-center w-full h-full justify-center gap-5 p-4 lg:p-8'>
        <div className='flex flex-col gap-5 lg:max-w-sm w-full'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold '>Sign In to your Account</h1>
            <p className='text-sm text-[#64748B] font-normal'>
              Welcome back! please enter your detail
            </p>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full'>
            <div className='flex flex-col gap-3'>
              <div
                className={`flex items-center gap-1 border-2 transition-all ${
                  focus.email
                    ? message?.email != ''
                      ? 'border-[#ED4F9D]'
                      : 'border-[#333333]'
                    : 'border-[#E2E8F0]'
                } rounded-md  w-full px-3`}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 7L12 13L21 7'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <input
                  type='email'
                  placeholder='Email'
                  required
                  onFocus={() => setFocus({ ...focus, email: true })}
                  onBlur={() => setFocus({ ...focus, email: false })}
                  className='p-2 focus:outline-none w-full border-none text-base font-semibold placeholder:font-normal placeholder:text-black'
                  value={info.email}
                  onChange={e => {
                    // e.target.value.length == 0 && e.target.value.length < 8
                    //   ? setMessage(prev => ({ ...prev, email: '' }))
                    //   : setMessage(prev => ({
                    //       ...prev,
                    //       email: 'Email Already Exists'
                    //     }))
                    setInfo({ ...info, email: e.target.value })
                  }}
                />
              </div>
              {message.email && (
                <p className='text-xs font-medium text-[#ED4F9D] flex items-center gap-2'>
                  <FiAlertCircle size={15} />
                  {message.email}
                </p>
              )}
            </div>
            <div className='flex flex-col gap-3'>
              <div
                className={`flex items-center gap-1 border-2 transition-all ${
                  focus.password
                    ? message?.password != ''
                      ? 'border-[#ED4F9D]'
                      : 'border-[#333333]'
                    : 'border-[#E2E8F0]'
                } rounded-md  w-full px-3`}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z'
                    stroke='black'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <input
                  type={show ? 'text' : 'password'}
                  required
                  placeholder='Password'
                  onFocus={() => setFocus({ ...focus, password: true })}
                  onBlur={() => setFocus({ ...focus, password: false })}
                  className='p-2 focus:outline-none w-full border-none text-base font-semibold placeholder:font-normal placeholder:text-black'
                  value={info.password}
                  onChange={e => {
                    // e.target.value.length == 0 && e.target.value.length < 8
                    //   ? setMessage(prev => ({ ...prev, password: '' }))
                    //   : setMessage(prev => ({
                    //       ...prev,
                    //       password: 'Password not match'
                    //     }))
                    setInfo({ ...info, password: e.target.value })
                  }}
                />
                {show ? (
                  <button
                    type='button'
                    className='border-none outline-none'
                    onClick={() => setShow(false)}
                  >
                    <FiEye size={20} />
                  </button>
                ) : (
                  <button
                    type='button'
                    className='border-none outline-none'
                    onClick={() => setShow(true)}
                  >
                    <FiEyeOff size={20} />
                  </button>
                )}
              </div>
              {message.password && (
                <p className='text-xs font-medium text-[#ED4F9D] flex items-center gap-2'>
                  <FiAlertCircle size={15} />
                  {message.password}
                </p>
              )}
            </div>
            <div className='flex items-center gap-1 mb-4 justify-between'>
              <div className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  className='border-2  accent-[#ED0A8A] rounded-md size-5 active:hover:accent-[#ED0A8A] focus:outline-none'
                />
                <p className='text-sm text-[#0F172A] font-medium'>
                  Remember me{' '}
                </p>
              </div>
              <Link
                to='/reset-password'
                className='text-sm text-[#ED0A8A] font-medium'
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type='submit'
              disabled={loading}
              className='p-3 bg-[#EEDFE2] text-base text-center justify-center flex items-center font-semibold rounded-md focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed disabled:animate-pulse'
            >
              {loading ? (
                <div className='size-5 border-4 border-gray-400 self-center rounded-full animate-spin border-t-primary-1' />
              ) : (
                'Sign In'
              )}
            </button>
          </form>
          {/* or login with */}
          <div className='flex items-center gap-2 w-full'>
            <hr className='w-full border-[#E2E8F0] border' />
            <p className='text-xs font-normal whitespace-nowrap'>
              Or sign in with
            </p>
            <hr className='w-full border-[#E2E8F0] border' />
          </div>
          <div className='flex items-center gap-4'>
            <button
              onClick={handleGoogle}
              className='p-3 bg-white border-2 text-base font-semibold rounded-lg w-full focus:outline-none flex items-center gap-3 justify-center'
            >
              <svg
                width='21'
                height='20'
                viewBox='0 0 21 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M19.0009 10.1943C19.0009 9.47489 18.9413 8.94989 18.8124 8.40546H10.4294V11.6526H15.35C15.2509 12.4596 14.7152 13.6749 13.5247 14.4915L13.508 14.6002L16.1585 16.6125L16.3421 16.6305C18.0286 15.104 19.0009 12.8582 19.0009 10.1943Z'
                  fill='#4285F4'
                />
                <path
                  d='M10.4288 18.75C12.8395 18.75 14.8633 17.9722 16.3415 16.6305L13.524 14.4916C12.7701 15.0069 11.7581 15.3666 10.4288 15.3666C8.06773 15.3666 6.06379 13.8402 5.34944 11.7305L5.24473 11.7392L2.48868 13.8295L2.45264 13.9277C3.92087 16.786 6.93674 18.75 10.4288 18.75Z'
                  fill='#34A853'
                />
                <path
                  d='M5.35014 11.7305C5.16165 11.1861 5.05257 10.6027 5.05257 9.99998C5.05257 9.39716 5.16165 8.81385 5.34022 8.26941L5.33523 8.15346L2.54464 6.0296L2.45333 6.07216C1.8482 7.25829 1.50098 8.59026 1.50098 9.99998C1.50098 11.4097 1.8482 12.7416 2.45333 13.9277L5.35014 11.7305Z'
                  fill='#FBBC05'
                />
                <path
                  d='M10.4289 4.63331C12.1054 4.63331 13.2364 5.34303 13.8812 5.93613L16.4011 3.525C14.8535 2.11528 12.8395 1.25 10.4289 1.25C6.93676 1.25 3.92088 3.21387 2.45264 6.07218L5.33953 8.26944C6.06381 6.15972 8.06776 4.63331 10.4289 4.63331Z'
                  fill='#EB4335'
                />
              </svg>
              Google
            </button>
            <button
              onClick={handleFacebook}
              className='p-3 bg-white border-2 text-base font-semibold rounded-lg w-full focus:outline-none flex items-center gap-3 justify-center'
            >
              <svg
                width='21'
                height='20'
                viewBox='0 0 21 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_512_350)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0.25 10.0558C0.25 15.0275 3.86083 19.1617 8.58333 20V12.7775H6.08333V10H8.58333V7.7775C8.58333 5.2775 10.1942 3.88917 12.4725 3.88917C13.1942 3.88917 13.9725 4 14.6942 4.11083V6.66667H13.4167C12.1942 6.66667 11.9167 7.2775 11.9167 8.05583V10H14.5833L14.1392 12.7775H11.9167V20C16.6392 19.1617 20.25 15.0283 20.25 10.0558C20.25 4.525 15.75 0 10.25 0C4.75 0 0.25 4.525 0.25 10.0558Z'
                    fill='#2563EB'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_512_350'>
                    <rect
                      width='20'
                      height='20'
                      fill='white'
                      transform='translate(0.25)'
                    />
                  </clipPath>
                </defs>
              </svg>
              Facebook
            </button>
          </div>
          <div className='flex items-center justify-center gap-2 text-sm'>
            <p className=' font-normal'>Don’t have an account?</p>
            <Link to='/signUp' className='font-semibold text-[#ED0A8A]'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
