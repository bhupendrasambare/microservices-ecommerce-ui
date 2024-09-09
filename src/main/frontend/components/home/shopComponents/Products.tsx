import React from 'react'
import CrossSvg from "Frontend/assets/web/cross.svg"
import Product1 from "Frontend/assets/web//product-1.png"
import Product2 from "Frontend/assets/web//product-2.png"
import Product3 from "Frontend/assets/web//product-3.png"


function Products() {
  return (
    <div className="untree_co-section product-section before-footer-section">
		    <div className="container">
		      	<div className="row">
                    
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src={Product3} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src={CrossSvg} className="img-fluid"/>
							</span>
						</a>
					</div> 
                    
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src={Product1} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src={CrossSvg} className="img-fluid"/>
							</span>
						</a>
					</div> 
                    
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src={Product2} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Kruzo Aero Chair</h3>
							<strong className="product-price">$78.00</strong>

							<span className="icon-cross">
								<img src={CrossSvg} className="img-fluid"/>
							</span>
						</a>
					</div>
                    
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src={Product3} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src={CrossSvg} className="img-fluid"/>
							</span>
						</a>
					</div>
                    
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src={Product3} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src={CrossSvg} className="img-fluid"/>
							</span>
						</a>
					</div> 
                    
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src={Product1} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src={CrossSvg} className="img-fluid"/>
							</span>
						</a>
					</div> 
                    
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src={Product2} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Kruzo Aero Chair</h3>
							<strong className="product-price">$78.00</strong>

							<span className="icon-cross">
								<img src={CrossSvg} className="img-fluid"/>
							</span>
						</a>
					</div>
                    
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src={Product3} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src={CrossSvg} className="img-fluid"/>
							</span>
						</a>
					</div>
                    

		      	</div>
		    </div>
		</div>
  )
}

export default Products