import SellerNavbar from '../components/seller/navbar'
import useRecaptcha from '../context/useRecaptcha'
import ReCAPTCHA from 'react-google-recaptcha'
import { SITE_KEY } from '../utils/secrets'
import Footer from '../components/seller/footer'
import { useEffect, useState } from 'react'
import { API_URL } from '../components/API'
import axios from 'axios'
import toast from 'react-hot-toast'
import Select from 'react-select'
import {
  CitySelect,
  CountrySelect,
  StateSelect
} from 'react-country-state-city'
import 'react-country-state-city/dist/react-country-state-city.css'

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
  const [formData, setFormData] = useState({
    businessName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    dateOfBirth: '',
    mobile: '',
    website: '',
    username: '',
    password: '',
    confirmPassword: '',
    secretQuestion: '',
    secretAnswer: '',
    document: null,
    about: ''
  })

  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')

  const [loading, setLoading] = useState(false)
  const [countryid, setCountryid] = useState(0)
  const [stateid, setstateid] = useState(0)
  // Fetch country, state, and city data

  const handleFileUpload = async e => {
    const file = e.target.files[0]
    if (!file) return
    setLoading(true)
    try {
      const fData = new FormData()
      fData.append('file', file)
      fData.append('upload_preset', 'ml_default') // Replace with your Cloudinary preset
      fData.append('cloud_name', 'dmkhjn2ii') // Replace with your Cloudinary name

      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/dmkhjn2ii/upload',
        fData
      )
      setFormData(prevData => ({
        ...prevData,
        document: res.data.secure_url
      }))
    } catch (error) {
      toast.error('Error uploading file')
      console.error('Error uploading file:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!acceptedTerms) {
      setResponseMessage('Please accept the terms and conditions')
      return
    }
    if (!capchaToken) {
      setResponseMessage('Please complete the captcha')
    }

    setLoading(true)

    // // Constructing the form data
    // const apiData = new FormData()
    // Object.entries(formData).forEach(([key, value]) => {
    //   if (value) apiData.append(key, value)
    // })
    const apiData = {
      email : formData.email,
        password : formData.password,
        businessName : formData.businessName,
        province : formData.state,
        address : formData.street,
        postalCode : formData.zip,
        country : formData.country,
        city : formData.city,
        firstName : formData.firstName,
        lastName : formData.lastName,
        mobileNumber : formData.mobile,
        telephone : formData.telephone,
        dateOfBirth : formData.dateOfBirth,
        website : formData.website,
        username : formData.username,
        secretQuestion : formData.secretQuestion,
        secretAnswer : formData.secretAnswer,
        documentUrl : formData.document,
        about : formData.about,
    }
 
    try {
      const response = await fetch(
        `${API_URL}/register/seller`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(apiData)
        }
      )

      const result = await response.json()
      if (response.ok) {
        toast.success('Registration successful!')
        setResponseMessage('Registration successful!')
      } else {
        setResponseMessage(`Error: ${result.message}`)
      }
    } catch (error) {
      setResponseMessage('An error occurred while submitting the form.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <SellerNavbar />
      <form
        onSubmit={handleSubmit}
        className='flex flex-col w-full p-4 lg:p-8 gap-5'
      >
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
                required
                onChange={handleChange}
                value={formData.businessName}
                className='border outline-none  rounded p-1 w-full border-[#717171]'
              />
              <label htmlFor='street' className='font-normal shrink-0'>
                Street Address
              </label>
              <input
                type='text'
                required
                name='street'
                id='street'
                onChange={handleChange}
                value={formData.street}
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
              <label>Country</label>
              <CountrySelect
                required
                onChange={e => {
                  setCountryid(e.id)
                  setFormData(prevData => ({
                    ...prevData,
                    country: e.name
                  }))
                }}
                placeHolder='Select Country'
              />
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full'>
            <div className='grid sm:grid-cols-[max-content_1fr]  gap-4'>
              <label>State/Province</label>
              <StateSelect
              required
                countryid={countryid}
                onChange={e => {
                  setstateid(e.id)
                  setFormData(prevData => ({
                    ...prevData,
                    state: e.name
                  }))
                }}
                placeHolder='Select State'
              />
              <label>City</label>
              <CitySelect
              required
                countryid={countryid}
                stateid={stateid}
                onChange={e => {
                  console.log(e)
                  setFormData(prevData => ({
                    ...prevData,
                    city: e.name
                  }))
                }}
                placeHolder='Select City'
              />
              <label htmlFor='zip' className='font-normal shrink-0'>
                Zip/Postal Code
              </label>
              <input
                type='text'
                required
                name='zip'
                id='zip'
                onChange={handleChange}
                value={formData.zip}
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
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
                required
                id='firstName'
                onChange={handleChange}
                value={formData.firstName}
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
              <label htmlFor='email' className='font-normal shrink-0'>
                Email Address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                onChange={handleChange}
                value={formData.email}
                required
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
                  onChange={handleChange}
                  value={formData.telephone}
                  required
                  className='border outline-none rounded p-1 w-full border-[#717171]'
                />
                <label htmlFor='dateOfBirth' className='font-normal shrink-0'>
                  DOB
                </label>
                <input
                  type='date'
                  name='dateOfBirth'
                  id='dateOfBirth'
                  onChange={handleChange}
                  value={formData.dateOfBirth}
                  required
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
                onChange={handleChange}
                value={formData.lastName}
                required
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />

              <label htmlFor='mobile' className='font-normal shrink-0'>
                Mobile Number
              </label>
              <input
                type='text'
                name='mobile'
                id='mobile'
                onChange={handleChange}
                value={formData.mobile}
                required
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
              <label htmlFor='website' className='font-normal shrink-0'>
                Website
              </label>
              <input
                type='text'
                name='website'
                id='website'
                onChange={handleChange}
                value={formData.website}
                required
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
            onChange={handleChange}
            value={formData.username}
            required
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
                onChange={handleChange}
                value={formData.password}
                required
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />
              <label htmlFor='secret_question' className='font-normal shrink-0'>
                Secret Question
              </label>
              <input
                type='text'
                name='secretQuestion'
                id='secret_question'
                onChange={handleChange}
                value={formData.secretQuestion}
                required
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
                name='confirmPassword'
                id='confirm-password'
                onChange={handleChange}
                value={formData.confirmPassword}
                required
                className='border outline-none rounded p-1 w-full border-[#717171]'
              />

              <label htmlFor='secret_answer' className='font-normal shrink-0'>
                Secret Answer
              </label>
              <input
                type='text'
                name='secretAnswer'
                id='secret_answer'
                onChange={handleChange}
                value={formData.secretAnswer}
                required
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
              onChange={handleFileUpload}
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
              onChange={handleChange}
              
              value={formData.about}
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
                  required
                  value={acceptedTerms}
                  onChange={() => {
                    setAcceptedTerms(!acceptedTerms)
                    setResponseMessage('')
                  }}
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
              {responseMessage && (
                <p className='text-red-500 self-end'>{responseMessage}</p>
              )}
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  )
}

export default BecomeASeller
