import { SellerProductsProps } from 'Frontend/inteface/seller/UiProps';
import React, { useState } from 'react';
import { Table, Pagination, Form, Container, Row, Col, Button } from 'react-bootstrap';
import { LiaPenAltSolid, LiaPlusCircleSolid, LiaPlusSolid } from 'react-icons/lia';
import { MdDelete } from 'react-icons/md';
import SellerAddEditProduct from './SellerAddEditProduct';
import { BiSolidImageAdd } from 'react-icons/bi';
import { BsInfoCircleFill } from 'react-icons/bs';



// Dummy data for the table
const data = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  image: `https://picsum.photos/200/200?random=${index + 1}`,
  name: `Item ${index + 1}`,
  description: `Description for item ${index + 1}`,
  price: `${index + 1} $`,
  discountPrice: `${((index + 1) * 80) / 100}  $`,
  status: `${((index + 1)%3)?'AVAILABLE':'OUT_OF_STOCK'}`,
  category: `${((index + 1)%3)?'Cloths':'Watch'}`
}));

const SellerProducts: React.FC<SellerProductsProps> = ({ editable,addProduct,top }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [modalShow, setModalShow] = useState<boolean>(false);
  
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

    const handleAddProductClick = () => {
        setModalShow(true)
    };
  
    return (
       <>
            <SellerAddEditProduct 
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={null}
            />
            <Container className='shadow bg-light py-2 rounded-3 my-2'>
                <Row className="my-3">
                <Col>
                    <h4 className='fw-bold'>{(top)?"Top Products":"Products"}</h4>
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
                {
                addProduct &&

                    <div className="d-flex w-100 justify-content-end">
                    <div
                        className="border-dark border-2 border rounded-5 px-2 my-2 border-bold"
                        onClick={handleAddProductClick}
                        style={{ cursor: 'pointer' }} // Optional: change cursor to pointer to indicate it's clickable
                        >
                        <LiaPlusCircleSolid size={20} /> Add Product
                    </div>
                    </div>
                }
        
                <Table striped bordered hover responsive >
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>final Price</th>
                    <th>Category</th>
                    <th>Status</th>
                    {
                        editable?
                        <th>Actions</th>:<></>
                    }
                    </tr>
                </thead>
                <tbody>
                    {currentPageData.map((item) => (
                    <tr key={item.id}>
                        <td className='d-flex justify-content-center'><img className='rounded-3 shadow' width={50} src={item.image} /></td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>{item.discountPrice}</td>
                        <td>{item.category}</td>
                        <td>{item.status}</td>
                    {
                        editable?
                        <td>
                        <div className="d-flex">
                            <LiaPenAltSolid size={20} className='mx-2 text-success'/>
                            <BsInfoCircleFill size={20} className='mx-2 text-info'/>
                            <BiSolidImageAdd size={20} className='mx-2 text-primary'/>
                            <MdDelete size={20} className='mx-2 text-danger'/>
                        </div>
                        </td>:<></>
                    }
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
      </> 
    );
};

export default SellerProducts