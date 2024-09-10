import DashboardCard from 'Frontend/components/seller/DashboardCard'
import SellerProducts from 'Frontend/components/seller/SellerProducts'
import SidebarComponent from 'Frontend/components/seller/SidebarComponent'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Sellerindex() {

    return (
        <>
            <SidebarComponent>
                <div className="row mt-3">
                    <Row>
                        <Col xs={12} sm={6} lg={3} className="mb-4">
                            <DashboardCard title="Products" description="Active products" value="11" />
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="mb-4">
                            <DashboardCard title="Revenue" description="Total earning" value="1,35K $" />
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="mb-4">
                            <DashboardCard title="Orders" description="This months earning" value="32K" />
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="mb-4">
                            <DashboardCard title="Reviews" description="Total reviews" value="254" />
                        </Col>
                    </Row>
                </div>
                <SellerProducts editable={false} top={true} addProduct={false} />
            </SidebarComponent>
        </>
    )
}

export default Sellerindex