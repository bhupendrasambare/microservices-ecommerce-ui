import { SellerProductsProps } from 'Frontend/inteface/seller/UiProps';
import React, { useEffect, useState } from 'react';
import { Table, Pagination, Form, Container, Row, Col, Button } from 'react-bootstrap';
import { LiaPenAltSolid, LiaPlusCircleSolid, LiaPlusSolid } from 'react-icons/lia';
import { MdDelete } from 'react-icons/md';
import SellerAddEditProduct from './SellerAddEditProduct';
import { BiSolidImageAdd } from 'react-icons/bi';
import { BsEyeFill, BsInfoCircleFill } from 'react-icons/bs';
import axios from 'axios';
import { ApiResponse } from 'Frontend/inteface/seller/ApiRespose';
import { CREATE_TOKEN, LOGIN_USER_PRODUCT_FETCH } from 'Frontend/constants/urls';
import { RootState } from 'Frontend/storage';
import { useSelector } from 'react-redux';
import ProductDescription from './ProductDescription';

const SellerProducts: React.FC<SellerProductsProps> = ({ editable,addProduct,top }) => {
    const token = useSelector((state: RootState) => state.auth.token);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [productList, setProductList] = useState<any[]>([]);

    const handleClose = () => {setModalShow(false);checkData()};
    const handleAddProductClick = () => setModalShow(true);
  
    const totalPages = Math.ceil(productList.length / pageSize);
  
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
    const currentPageData = productList.slice(startIndex, startIndex + pageSize);
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
            {i}
        </Pagination.Item>
        );
    }

  
    const checkData = async () =>{
        try {
            const response = await axios.get<ApiResponse<any[] | null | []>>(LOGIN_USER_PRODUCT_FETCH, {
                headers: { Authorization: CREATE_TOKEN(token), },
            });
    
            if (response.data.status === 'SUCCESS' && response.data.data) {
                setProductList(response.data.data);
                console.log(response.data.data)
            }
        } catch (error) {
            console.error('Error fetching product data', error);
        }
    }

    useEffect(()=>{
        checkData();
    },[])

    return (
       <>
            <SellerAddEditProduct 
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleClose={handleClose}
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
                    {/* <th>Image</th> */}
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>final Price</th>
                    <th>Category</th>
                    <th>Status</th>
                    { editable?
                        <th>Info</th>:<></>
                    }
                    { editable?
                        <th>Actions</th>:<></>
                    }
                    </tr>
                </thead>
                <tbody>
                    {currentPageData.map((item) => (
                    <tr key={item.product.id}>
                        {/* <td className='d-flex justify-content-center'><img className='rounded-3 shadow' width={50} src={item.image} /></td> */}
                        <td>{item?.product?.name}</td>
                        <td><ProductDescription description={item?.product?.description}/></td>
                        <td>{item?.product?.price}</td>
                        <td>{item?.product?.discountPrice}</td>
                        <td>{item?.categories[0]?.categoryName}</td>
                        <td>{item?.product?.status}</td>
                        {editable?
                            <td>
                                <div className="d-flex fs-6">
                                    <div className="btn btn-sm btn-info text-info px-2 py-1">
                                        <BsEyeFill size={20} className='text-info'/> View
                                    </div>
                                    <div className="btn btn-sm btn-info text-info px-2 py-1 ms-1">
                                        <BsInfoCircleFill size={20} className='text-info'/> Attributes
                                    </div>
                                </div>
                            </td>:<></>
                        }
                        {
                        editable?
                            <td>
                                <div className="d-flex">
                                    <div className="btn btn-sm btn-success text-success px-2 py-1">
                                        <LiaPenAltSolid size={20} className='text-success'/> Edit
                                    </div>
                                    <div className="btn btn-sm btn-primary text-success px-2 py-1 mx-1">
                                        <BiSolidImageAdd size={20} className='text-success'/> images
                                    </div>
                                    <div className="btn btn-sm btn-danger text-danger px-2 py-1">
                                        <MdDelete size={20} className='text-danger'/> Delete
                                    </div>
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