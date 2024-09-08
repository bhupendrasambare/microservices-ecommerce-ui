import React from 'react';
import HeroSection from 'Frontend/components/homeComponents/HeroSection';
import HomeFeatured from 'Frontend/components/homeComponents/HomeFeatured';
import Extras from 'Frontend/components/homeComponents/Extras';
import BestSelles from 'Frontend/components/BestSelles';
import Testmonials from 'Frontend/components/Testmonials';
import NavBar from 'Frontend/components/NavBar';
import Footer from 'Frontend/components/Footer';
import "../style/index.css"
import "../style/index.scss"
import "../style/login.css"

function Home() {
  return (
    <div>
        <NavBar/>
        <HeroSection title='Modern Interior Design Studio' description='Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.' showButton={true}/>
        <HomeFeatured/>
        <Extras/>
        <BestSelles/>
        <Testmonials/>
        <Footer/>
    </div>
  )
}

export default Home