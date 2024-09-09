import React, { useEffect, useRef } from 'react'
import Person1 from "Frontend/assets/web/person-1.png";
import { tns } from 'tiny-slider';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

function Testmonials() {

	const sliderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (sliderRef.current) {
            tns({
            container: sliderRef.current,
            items: 1,
            axis: "horizontal",
            controlsContainer: "#testimonial-nav",
            swipeAngle: false,
            speed: 700,
            nav: true,
            controls: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 3500,
            autoplayButtonOutput: false
            });
        }
    }, []);

  return (
    <div>
      <div className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testimonial-slider-wrap text-center">

                <div id="testimonial-nav">
                  <span className="prev" data-controls="prev"> <SlArrowLeft size={30}/> </span>
                  <span className="next" data-controls="next"> <SlArrowRight size={30}/> </span>
                </div>

                <div className="testimonial-slider" ref={sliderRef}>

                    <div className="item">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                                <div className="testimonial-block text-center">
                                <blockquote className="mb-5">
                                    <p>
                                    &ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;
                                    </p>
                                </blockquote>

                                <div className="author-info">
                                    <div className="author-pic">
                                    <img src={Person1} alt="Maria Jones" className="img-fluid" />
                                    </div>
                                    <h3 className="font-weight-bold">Maria Jones</h3>
                                    <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                                <div className="testimonial-block text-center">
                                <blockquote className="mb-5">
                                    <p>
                                    &ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;
                                    </p>
                                </blockquote>

                                <div className="author-info">
                                    <div className="author-pic">
                                    <img src={Person1} alt="Maria Jones" className="img-fluid" />
                                    </div>
                                    <h3 className="font-weight-bold">Maria Jones</h3>
                                    <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                                <div className="testimonial-block text-center">
                                <blockquote className="mb-5">
                                    <p>
                                    &ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;
                                    </p>
                                </blockquote>

                                <div className="author-info">
                                    <div className="author-pic">
                                    <img src={Person1} alt="Maria Jones" className="img-fluid" />
                                    </div>
                                    <h3 className="font-weight-bold">Maria Jones</h3>
                                    <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testmonials