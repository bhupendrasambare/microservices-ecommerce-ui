import Footer from 'Frontend/components/home/Footer'
import Extras from 'Frontend/components/home/homeComponents/Extras'
import HeroSection from 'Frontend/components/home/homeComponents/HeroSection'
import NavBar from 'Frontend/components/home/NavBar'
import Testmonials from 'Frontend/components/home/Testmonials'
import React from 'react'

function About() {
  return (
    <div>
        <NavBar/>
        <HeroSection title='About us' description='Donec vitae odio quis nisl dapibus malesuada.
         Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.' showButton={true}/>
         <Extras/>
         <Testmonials/>
         <Footer/>
    </div>
  )
}

export default About