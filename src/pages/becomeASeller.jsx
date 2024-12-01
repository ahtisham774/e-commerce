import SellerNavbar from '../components/seller/navbar'
import useRecaptcha from '../context/useRecaptcha'
import ReCAPTCHA from 'react-google-recaptcha'
import { SITE_KEY } from '../utils/secrets'
import Footer from '../components/seller/footer'

const Heading = ({ title, subTitle }) => {
  return (
    <div className='flex items-center p-3 bg-[#E2E1E1] rounded'>
      <h1 className='text-xl font-bold'>{title} -</h1>

      <p className='text-sm ml-2 mt-1'>{subTitle}</p>
    </div>
  )
}

const BecomeASeller = () => {
  const { capchaToken, recaptchaRef, handleRecaptcha } = useRecaptcha()
  return (
    <>
      <SellerNavbar />
      <div className='flex flex-col w-full p-4 lg:p-8 gap-5'>
        <div className='flex flex-col gap-3 w-full'>
          <h2 className='text-xl font-bold text-center'>
            Information Required
          </h2>
          <p>
            Thank you for your interest in becoming a Seller with us, To become
            a seller and establish an account we would need the following
            information:
          </p>
          <ul className='list-inside list-disc'>
            <li>
              <span className='font-bold'>All Dealers: </span>Required to submit
              A Copy of their Government Issued ID
            </li>
            <li>
              <span className='font-bold'>All Dealers: </span>You must be 18
              years and above.
            </li>
          </ul>
          <p>
            If you have any issues please feel free to call us at 123-456-7890
            or{' '}
            <a href='' className='underline underline-offset-1 font-bold'>
              E-mail customer support
            </a>
          </p>
        </div>
        <div className='flex items-center'>
          <label htmlFor='confirmation' className='font-bold'>
            Would you prefer to keep your identity confidential for all
            transactions?
          </label>
          <input
            type='checkbox'
            name='confirmation'
            id='confirmation'
            className='ml-4 size-5'
          />
        </div>
        <Heading
          title='Business information'
          subTitle='All fields are required'
        />
        <div className='flex flex-col gap-8 w-full md:flex-row pl-4'>
          <div className='flex flex-col gap-5 w-full '>
            <div className='grid sm:grid-cols-[max-content_1fr]  gap-4'>
              <label htmlFor='businessName' className='font-normal shrink-0'>
                Business Name
              </label>
              <input
                type='text'
                name='businessName'
                id='businessName'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
              <label htmlFor='street' className='font-normal shrink-0'>
                Street Address
              </label>
              <input
                type='text'
                name='street'
                id='street'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
              <label htmlFor='city' className='font-normal shrink-0'>
                City
              </label>
              <input
                type='text'
                name='city'
                id='city'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full'>
            <div className='grid sm:grid-cols-[max-content_1fr]  gap-4'>
              <label htmlFor='state' className='font-normal shrink-0'>
                State/Province
              </label>
              <input
                type='text'
                name='state'
                id='state'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />

              <label htmlFor='zip' className='font-normal shrink-0'>
                Zip/Postal Code
              </label>
              <input
                type='text'
                name='zip'
                id='zip'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
              <label htmlFor='country' className='font-normal shrink-0'>
                Country
              </label>
              <select
                name='country'
                id='country'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              >
                <option value=''>Select Country</option>
                <option value='USA'>USA</option>
                <option value='UK'>UK</option>
                <option value='India'>India</option>
              </select>
            </div>
          </div>
        </div>
        <Heading
          title='Contact information'
          subTitle='All fields are required'
        />
        <div className='flex flex-col gap-8 w-full md:flex-row pl-4'>
          <div className='flex flex-col gap-5 w-full '>
            <div className='grid sm:grid-cols-[max-content_1fr]  gap-4'>
              <label htmlFor='firstName' className='font-normal shrink-0'>
                First Name
              </label>
              <input
                type='text'
                name='firstName'
                id='firstName'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
              <label htmlFor='email' className='font-normal shrink-0'>
                Email Address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
              <label htmlFor='telephone' className='font-normal shrink-0'>
                Telephone
              </label>
              <div className='grid sm:grid-cols-[1fr_max-content_max-content] sm:place-items-center gap-4'>
                <input
                  type='number'
                  name='telephone'
                  id='telephone'
                  className='border outline-none rounded p-1 w-full border-[#717171]'
                />
                <label htmlFor='dateOfBirth' className='font-normal shrink-0'>
                  DOB
                </label>
                <input
                  type='date'
                  name='dateOfBirth'
                  id='dateOfBirth'
                  className='border outline-none rounded p-1 w-full border-[#717171]'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full'>
            <div className='grid sm:grid-cols-[max-content_1fr]  gap-4'>
              <label htmlFor='lastName' className='font-normal shrink-0'>
                Last Name
              </label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />

              <label htmlFor='mobile' className='font-normal shrink-0'>
                Mobile Number
              </label>
              <input
                type='text'
                name='mobile'
                id='mobile'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
              <label htmlFor='website' className='font-normal shrink-0'>
                Website
              </label>
              <input
                type='text'
                name='website'
                id='website'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
            </div>
          </div>
        </div>
        <Heading
          title='Choose Your Username And Password'
          subTitle='All fields are required'
        />
        <div className='grid sm:grid-cols-[minmax(7rem,max-content)_1fr]  gap-4 pl-4'>
          <label htmlFor='username' className='font-normal shrink-0'>
            User Name
          </label>
          <input
            type='text'
            name='username'
            id='username'
            className='border flex-1 outline-none rounded p-1 w-full border-[#717171]'
          />
        </div>
        <div className='flex flex-col gap-8 w-full md:flex-row pl-4'>
          <div className='flex flex-col gap-5 w-full '>
            <div className='grid sm:grid-cols-[max-content_1fr]  gap-4'>
              <label htmlFor='password' className='font-normal shrink-0'>
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
              <label htmlFor='secret_question' className='font-normal shrink-0'>
                Secret Question
              </label>
              <input
                type='text'
                name='secret_question'
                id='secret_question'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full'>
            <div className='grid sm:grid-cols-[max-content_1fr]  gap-4'>
              <label
                htmlFor='confirm-password'
                className='font-normal shrink-0'
              >
                Re-Enter Password
              </label>
              <input
                type='password'
                name='confirm-password'
                id='confirm-password'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />

              <label htmlFor='secret_answer' className='font-normal shrink-0'>
                Secret Answer
              </label>
              <input
                type='text'
                name='secret_answer'
                id='secret_answer'
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
            </div>
          </div>
        </div>
        <Heading
          title='General information'
          subTitle='All fields are required'
        />
        <div className='flex flex-col gap-5 w-full pl-4'>
          <div className='flex flex-col sm:flex-row sm:items-center justify-end gap-5'>
            <label htmlFor='document' className='font-normal shrink-0'>
              Attach Document
            </label>
            <input
              type='file'
              name='document'
              id='document'
              className='border outline-none file:bg-black file:text-white file:rounded file:p-1 file:px-3 file:font-bold rounded w-full md:max-w-lg border-[#717171]'
            />
          </div>
          <div className='grid sm:grid-cols-[minmax(7rem,max-content)_1fr] w-full  gap-4'>
            <label htmlFor='about' className='font-normal shrink-0'>
              About
            </label>
            <textarea
              name='about'
              id='about'
              rows={8}
              className='border outline-none rounded resize-none p-1 w-full border-[#717171]'
            ></textarea>
          </div>
          <div className='flex flex-col md:flex-row gap-5 w-full justify-between my-3'>
            <div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={SITE_KEY}
                onChange={handleRecaptcha}
              />
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex items-center gap-3'>
                <input
                  type='checkbox'
                  name='policy'
                  id='policy'
                  className='size-5 accent-black'
                />
                <label htmlFor='policy' className='font-normal '>
                  I have read the{' '}
                  <a
                    href='#'
                    target='_blank'
                    rel='noreferrer'
                    className='font-bold'
                  >
                    Terms & Condition
                  </a>{' '}
                  and agree to abide by these
                </label>
              </div>
              <div className='flex items-center gap-4 justify-end'>
                <button
                  type='reset'
                  className='uppercase p-1 px-3 bg-[#D9D9D9] rounded'
                >
                  Clear Fields
                </button>
                <button
                  type='submit'
                  className='uppercase p-1 px-4 bg-black text-white rounded font-bold'
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
    </>
  )
}

export default BecomeASeller
