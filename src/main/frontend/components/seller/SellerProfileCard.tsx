import React from 'react'
import { LiaFacebook, LiaLinkedin, LiaTwitter, LiaYoutube } from 'react-icons/lia'

function SellerProfileCard() {
  return (
    <div>
            <div className="row gy-4">
                <div className="col-12">
                    <div className="card widget-card border-light shadow-sm">
                        <div className="card-header text-bg-primary">Welcome, Ethan Leo</div>
                        <div className="card-body">
                            <div className="text-center mb-3">
                            <img src="https://picsum.photos/200?random=1" className="img-fluid rounded-circle" alt="Luna John"/>
                            </div>
                            <h5 className="text-center mb-1">Ethan Leo</h5>
                            <p className="text-center text-secondary mb-4">Hardware seller</p>
                            <ul className="list-group list-group-flush mb-4">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h6 className="m-0">Products</h6>
                                <span>74</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h6 className="m-0">Reavenue</h6>
                                <span>5,987 $</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h6 className="m-0">Reviews</h6>
                                <span>460</span>
                            </li>
                            </ul>
                            <div className="d-grid m-0">
                                <button className="btn btn-outline-primary" type="button">Edit Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card widget-card border-light shadow-sm">
                    <div className="card-header text-bg-primary">Social Accounts</div>
                    <div className="p-3 d-flex justify-content-between">
                        <a href="#!" className="bg-danger text-light p-1 link-light rounded">
                            <LiaYoutube size={30}/>
                        </a>
                        <a href="#!" className="bg-info text-light p-1 link-light rounded">
                            <LiaTwitter size={30}/>
                        </a>
                        <a href="#!" className="bg-primary text-light p-1 link-light rounded">
                            <LiaFacebook size={30}/>
                        </a>
                        <a href="#!" className="bg-primary text-light p-1 link-light rounded">
                            <LiaLinkedin size={30}/>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SellerProfileCard