import Footer from 'Frontend/components/Footer'
import HeroSection from 'Frontend/components/homeComponents/HeroSection'
import HomeFeatured from 'Frontend/components/homeComponents/HomeFeatured'
import NavBar from 'Frontend/components/NavBar'
import ServicesBreif from 'Frontend/components/ServicesBreif'
import Testmonials from 'Frontend/components/Testmonials'
import React from 'react'

function Services() {
  return (
    <div>
        <NavBar/>
        <HeroSection title='Services' description='Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.' showButton={true}/>
        <ServicesBreif/>
        <HomeFeatured/>
        <Testmonials/>
        <Footer/>
    </div>
  )
}

export default Services