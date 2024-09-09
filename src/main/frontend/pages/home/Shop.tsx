import Footer from 'Frontend/components/home/Footer'
import HeroSection from 'Frontend/components/home/homeComponents/HeroSection'
import NavBar from 'Frontend/components/home/NavBar'
import Products from 'Frontend/components/home/shopComponents/Products'
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