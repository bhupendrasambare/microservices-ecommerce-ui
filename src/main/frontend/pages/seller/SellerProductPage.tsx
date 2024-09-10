import SellerProducts from 'Frontend/components/seller/SellerProducts'
import SidebarComponent from 'Frontend/components/seller/SidebarComponent'
import React from 'react'

function SellerProductPage() {
  return (
    <div>
        <SidebarComponent>
            <SellerProducts top={false} addProduct={true} editable={true}/>
        </SidebarComponent>
    </div>
  )
}

export default SellerProductPage