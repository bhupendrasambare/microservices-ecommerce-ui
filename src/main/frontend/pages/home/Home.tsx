import React from 'react';
import HeroSection from 'Frontend/components/home/homeComponents/HeroSection';
import HomeFeatured from 'Frontend/components/home/homeComponents/HomeFeatured';
import Extras from 'Frontend/components/home/homeComponents/Extras';
import BestSelles from 'Frontend/components/home/BestSelles';
import Testmonials from 'Frontend/components/home/Testmonials';
import NavBar from 'Frontend/components/home/NavBar';
import Footer from 'Frontend/components/home/Footer';
import "Frontend/style/index.css"
import "Frontend/style/index.scss"
import "Frontend/style/login.css"

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