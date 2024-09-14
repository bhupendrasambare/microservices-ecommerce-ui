import SellerReviewsTable from 'Frontend/components/seller/SellerReviewsTable';
import SidebarComponent from 'Frontend/components/seller/SidebarComponent'
import React from 'react'

function SellerReviewsPage() {
  return (
    <div>
        <SidebarComponent>
            <>
            <SellerReviewsTable/>
            </>
        </SidebarComponent>
    </div>
  )
}

export default SellerReviewsPage