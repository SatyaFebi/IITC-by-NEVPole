import Navbar from '../layouts/LandingPage/Navbar'
import Hero from '../layouts/LandingPage/Hero'
import Method from '../layouts/LandingPage/Method'
import Choose from '../layouts/LandingPage/Choose'
import TermsAndCondition from '../layouts/LandingPage/TermsAndCondition'
import Register from '../layouts/LandingPage/Register'
import Footer from '../layouts/LandingPage/Footer'

const LandingPage = () => {
  return (
    <div className='overflow-x-hidden max-w-full'>
        <Navbar />
        <Hero />
        <Method />
        <Choose />
        <TermsAndCondition />
        <Register />
        <Footer />
    </div>
  )
}

export default LandingPage