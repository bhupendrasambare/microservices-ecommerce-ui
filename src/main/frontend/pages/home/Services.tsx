import Footer from 'Frontend/components/home/Footer'
import HeroSection from 'Frontend/components/home/homeComponents/HeroSection'
import HomeFeatured from 'Frontend/components/home/homeComponents/HomeFeatured'
import NavBar from 'Frontend/components/home/NavBar'
import ServicesBreif from 'Frontend/components/home/ServicesBreif'
import Testmonials from 'Frontend/components/home/Testmonials'
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