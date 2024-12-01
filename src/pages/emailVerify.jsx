import Slider from '../components/authentication/slider'

const EmailVerify = () => {


  return (
    <div className='grid grid-cols-1 md:grid-cols-[45%_55%] w-full min-h-screen h-full gap-8 md:gap-0'>
      <Slider />
      <div className='flex flex-col items-center w-full h-full justify-between gap-5  p-4 lg:p-8'>
        <div className='flex flex-col gap-5 lg:max-w-sm w-full h-full flex-1  justify-center'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold '>Verify your Email</h1>
            <p className='text-sm text-[#64748B] font-normal'>
              Thank you, check your email for instructions to reset your
              password
            </p>
          </div>
          <form className='flex flex-col gap-5 w-full my-3'>
            <button
              type='submit'
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
      </div>
    </div>
  )
}

export default EmailVerify
