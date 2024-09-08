import Footer from 'Frontend/components/Footer'
import HeroSection from 'Frontend/components/homeComponents/HeroSection'
import NavBar from 'Frontend/components/NavBar'
import Products from 'Frontend/components/shopComponents/Products'
import React from 'react'

function Shop() {
  return (
    <div>
        <NavBar/>
        <HeroSection title='Shop' description='' showButton={false}/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Shop