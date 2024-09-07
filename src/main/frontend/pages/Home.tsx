import React from 'react';
import HeroSection from 'Frontend/components/homeComponents/HeroSection';
import HomeFeatured from 'Frontend/components/homeComponents/HomeFeatured';
import Extras from 'Frontend/components/homeComponents/Extras';
import BestSelles from 'Frontend/components/BestSelles';
import Testmonials from 'Frontend/components/Testmonials';
import NavBar from 'Frontend/components/NavBar';
import Footer from 'Frontend/components/Footer';
import RecentBlogs from 'Frontend/components/blogComponents/RecentBlogs';

function Home() {
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <HomeFeatured/>
        <Extras/>
        <BestSelles/>
        <Testmonials/>
        <RecentBlogs/>
        <Footer/>
    </div>
  )
}

export default Home