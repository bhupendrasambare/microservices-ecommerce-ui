import { CREATE_URL } from 'Frontend/constants/urls';
import { RootState } from 'Frontend/storage';
import React from 'react'
import { LiaFacebook, LiaLinkedin, LiaTwitter, LiaYoutube } from 'react-icons/lia'
import { useSelector } from 'react-redux';

function SellerProfileCard() {

    const userData:any|null = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
        <div className="row gy-4">
            <div className="col-12">
                <div className="card widget-card border-light shadow-sm">
                    <div className="card-header text-bg-primary">Welcome, {userData?.firstName}</div>
                    <div className="card-body">
                        <div className="text-center mb-3">
                        <img width={200} src={userData && (userData?.profilePicture)?CREATE_URL(userData.profilePicture):"https://picsum.photos/200?random=1"} className="img-fluid rounded-circle" alt="Bhupendra sambare"/>
                        </div>
                        <h5 className="text-center mb-1">{userData?.firstName + " " + userData?.lastName}</h5>
                        <p className="text-center text-secondary mb-4">{userData?.title}</p>
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
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="card widget-card border-light shadow-sm">
                    <div className="card-header text-bg-primary">Social Accounts</div>
                    <div className="p-3 d-flex justify-content-start">
                        {userData?.youtube &&
                            <a href={userData?.youtube} className="bg-danger text-light p-1 link-light rounded mx-2">
                                <LiaYoutube size={30}/>
                            </a>
                        }
                        {userData?.twitter &&
                            <a href={userData?.twitter} className="bg-info text-light p-1 link-light rounded mx-2">
                                <LiaTwitter size={30}/>
                            </a>
                        }
                        {userData?.facebook &&
                            <a href={userData?.facebook} className="bg-primary text-light p-1 link-light rounded mx-2">
                                <LiaFacebook size={30}/>
                            </a>
                        }
                        {userData?.linkedin &&
                            <a href={userData?.linkedin} className="bg-primary text-light p-1 link-light rounded">
                                <LiaLinkedin size={30}/>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SellerProfileCard