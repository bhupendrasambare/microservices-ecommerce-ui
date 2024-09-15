import SellerProfileCard from 'Frontend/components/seller/SellerProfileCard'
import SellerProfileTab from 'Frontend/components/seller/SellerProfileTab'
import SidebarComponent from 'Frontend/components/seller/SidebarComponent'
import { SellerProfileTabProps } from 'Frontend/inteface/seller/UiProps'
import React from 'react'

const SellerUser: React.FC<SellerProfileTabProps> = ({ tabs }) => {

  return (
    <SidebarComponent>
        <section className="bg-light py-3 py-md-5 py-xl-8">

            <div className="container">
                <div className="row gy-4 gy-lg-0">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <SellerProfileCard/>
                    </div>
                    <div className="col-12 col-lg-8 col-xl-9">
                        <div className="card widget-card border-light shadow-sm">
                            <div className="card-body p-4">
                                {
                                    tabs && 
                                    <SellerProfileTab tabs={tabs}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </SidebarComponent>
  )
}

export default SellerUser