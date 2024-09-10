import React, { useState } from 'react';
import { Table, Pagination, Form, Container, Row, Col, Button } from 'react-bootstrap';
import { LiaPenAltSolid } from 'react-icons/lia';
import { MdDelete } from 'react-icons/md';

interface SellerProductsProps {
    editable:boolean;
    addProduct:boolean;
    top:boolean;
}


// Dummy data for the table
const data = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
  description: `Description for item ${index + 1}`,
  price: `${index + 1} $`,
  discountPrice: `${((index + 1) * 80) / 100}  $`,
  status: `${((index + 1)%3)?'AVAILABLE':'OUT_OF_STOCK'}`,
  category: `${((index + 1)%3)?'Cloths':'Watch'}`
}));

const SellerProducts: React.FC<SellerProductsProps> = ({ editable,addProduct,top }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
  
    const totalPages = Math.ceil(data.length / pageSize);
  
    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };
  
    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setPageSize(Number(e.target.value));
      setCurrentPage(1);
    };

    const maxPagesToShow = 5;   
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);  
    let startPage = Math.max(1, currentPage - halfMaxPagesToShow);
    let endPage = Math.min(totalPages, currentPage + halfMaxPagesToShow);
    const startIndex = (currentPage - 1) * pageSize;
    const currentPageData = data.slice(startIndex, startIndex + pageSize);
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
            {i}
        </Pagination.Item>
        );
    }
  
    return (
      <Container className='shadow bg-light py-2 rounded-3 my-2'>
        <Row className="my-3">
          <Col>
            <h4>{(top)?"Top Products":"Products"}</h4>
          </Col>
          <Col className="text-end">
            <Form.Select value={pageSize} onChange={handlePageSizeChange} style={{ width: 'auto', display: 'inline-block' }}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </Form.Select>
          </Col>
        </Row>
        <div className="d-flex w-100 justify-content-end">
        </div>
  
        <Table striped bordered hover responsive >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>final Price</th>
              <th>Category</th>
              <th>Status</th>
              {
                addProduct?
                <th>Actions</th>:<></>
              }
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.discountPrice}</td>
                <td>{item.category}</td>
                <td>{item.status}</td>
              {
                addProduct?
                <td>
                  <div className="d-flex">
                    <LiaPenAltSolid size={20} className='mx-1'/>
                    <MdDelete size={20} className='mx-1'/>
                  </div>
                </td>:<></>
              }
              </tr>
            ))}
          </tbody>
        </Table>
  
        {/* Pagination */}
        <Pagination>
            <Pagination.First className="pagination-first" onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
            
            {pages}
            
            <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
            <Pagination.Last className="pagination-last" onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      </Container>
    );
};

export default SellerProducts