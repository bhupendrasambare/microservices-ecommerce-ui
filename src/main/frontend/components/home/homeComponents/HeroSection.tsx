import React from 'react'
import Couch from 'Frontend/assets/web/couch.png'
import { useNavigate } from 'react-router-dom';
import { HeroSectionProp } from 'Frontend/inteface/home/UiProps';



const HeroSection: React.FC<HeroSectionProp> = ({ title,description,showButton }) => {
    const navigate = useNavigate();

  return (
        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>{title}</h1>
                            <p className="mb-4">{description}</p>
                            {
                                showButton && 
                                <p>
                                    <div onClick={()=>navigate("/shop")} className="btn me-2 hero-btn-style">Shop Now</div>
                                    <div onClick={()=>navigate("/contact")} className="btn btn-white-outline hero-btn-secondary">Contact</div>
                                </p>

                            }
                        </div>
                    </div>
                    <div className="col-lg-7">
                        {
                            showButton && 
                                <div className="hero-img-wrap">
                                    <img src={Couch} className="img-fluid" />
                                </div>

                        }
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HeroSection