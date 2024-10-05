import React, { useState } from 'react'
import { Col, Container, Form, Pagination, Row, Table } from 'react-bootstrap'

function randomDate(start:Date, end:Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


const data = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    customerUserName: `Username ${index + 1}`,
    customerImage: `https://picsum.photos/200/200?random=${index + 1}`,
    customerFullName: `UserFull Name ${index + 1}`,
    rating: Math.floor(Math.random() * (5 - 0 + 1) + 0),
    review: `Review for item ${index + 1}`,
    createdAt: randomDate(new Date(2012, 0, 1), new Date())
}));

function SellerReviewsTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
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
            <h4 className='fw-bold'>Products Reviews</h4>
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
  
        <Table striped bordered hover responsive >
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Username</th>
              <th>Full name</th>
              <th>Raiting</th>
              <th>Review</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td className='d-flex justify-content-center'><img className='rounded-3 shadow' width={50} src={item.customerImage} /></td>
                <td>{item.customerUserName}</td>
                <td>{item.customerFullName}</td>
                <td>{item.rating}</td>
                <td>{item.review}</td>
                <td>{item.createdAt.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
  
        {/* Pagination */}
        <Pagination className="custom-pagination">
            <Pagination.First className="pagination-first" onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
            <Pagination.Prev className="pagination-prev" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
            
            {pages}
            
            <Pagination.Next className="pagination-next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
            <Pagination.Last className="pagination-last" onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      </Container>
  )
}

export default SellerReviewsTable