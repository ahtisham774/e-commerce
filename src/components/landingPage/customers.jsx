
import Container from '../../utils/container'
import Title from './title'
import profile from '/assets/profile.png'

import ShowReviews from '../../utils/showReviews'

const Customers = () => {

  const customers = [
    {
      name: 'Roberto Jr.',
      role: 'Graphic Design',
      img: profile,
      heading: 'Lorem ipsum dolor sit amet',
      subHeading: 'Subheading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4.5
    },
    {
      name: 'Roberto Jr.',
      role: 'Graphic Design',
      img: profile,
      heading: 'Lorem ipsum dolor sit amet',
      subHeading: 'Subheading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4.5
    },
    {
      name: 'Roberto Jr.',
      role: 'Graphic Design',
      img: profile,
      heading: 'Lorem ipsum dolor sit amet',
      subHeading: 'Subheading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4.5
    },
    {
      name: 'Roberto Jr.',
      role: 'Graphic Design',
      img: profile,
      heading: 'Lorem ipsum dolor sit amet',
      subHeading: 'Subheading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4.5
    },
    {
      name: 'Roberto Jr. 1',
      role: 'Graphic Design',
      img: profile,
      heading: 'Lorem ipsum dolor sit amet',
      subHeading: 'Subheading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4.5
    },
    {
      name: 'Roberto Jr.',
      role: 'Graphic Design',
      img: profile,
      heading: 'Lorem ipsum dolor sit amet',
      subHeading: 'Subheading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4.5
    },
    {
      name: 'Roberto Jr.',
      role: 'Graphic Design',
      img: profile,
      heading: 'Lorem ipsum dolor sit amet',
      subHeading: 'Subheading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4.5
    }
  ]




  return (
    <Container>
      <div className='flex flex-col gap-8 w-full justify-center'>
        <Title text='Our Satisfied Customers' />
        <ShowReviews data={customers} />
      </div>
    </Container>
  )
}

export default Customers
