import React from 'react'
import { Card } from 'react-bootstrap'

interface DashboardCardProps {
    title:string;
    description:string;
    value:string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title,description,value }) => {
  return (
    <div>
        <Card style={{ width: '18rem' }} className='my-2'>
            <Card.Body>
                <div className="d-flex justify-content-between w-100 bottom-0">
                    <div className="">
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
                    </div>
                    <div className="fs-2 fw-bold text-secondary">
                        {value}
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default DashboardCard