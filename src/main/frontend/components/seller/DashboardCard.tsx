import { DashboardCardProps } from 'Frontend/inteface/seller/UiProps'
import React from 'react'
import { Card } from 'react-bootstrap'

const DashboardCard: React.FC<DashboardCardProps> = ({ title,description,value,theme }) => {
  return (
    <div>
        <Card style={{ width: '18rem' }} className={'my-2 text-'+theme}>
            <Card.Body>
                <div className="d-flex justify-content-between w-100 bottom-0">
                    <div className="">
                        <div className='fw-bold pb-2 fs-4'>{title}</div>
                        <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
                    </div>
                    <div className={"fs-2 fw-bold text"+theme}>
                        {value}
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default DashboardCard