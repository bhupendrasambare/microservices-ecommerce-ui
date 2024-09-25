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
import { CREATE_TOKEN, LOGIN_USER_PRODUCT_FETCH, UPDATE_PRODUCT_QUANTITY, UPDATE_PRODUCT_STATUS } from 'Frontend/constants/urls';
import { RootState } from 'Frontend/storage';
import { useSelector } from 'react-redux';
import ProductDescription from './ProductDescription';
import SellerAddEditAttributes from './SellerAddEditAttributes';
import SellerAddImage from './SellerAddImage';
import SellerProductPreview from './SellerProductPreview';

const SellerProducts: React.FC<SellerProductsProps> = ({ editable,addProduct,top }) => {
    const token = useSelector((state: RootState) => state.auth.token);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [productList, setProductList] = useState<any[]>([]);
    const [editData,setEditData] = useState(null);
    const statuses = ['AVAILABLE', 'OUT_OF_STOCK', 'DISCONTINUED'];

    const [modalShow, setModalShow] = useState<boolean>(false);
    const handleClose = () => {setModalShow(false);checkData()};
    const handleAddProductClick = (tempData:any) => {
        setModalShow(true);setEditData(tempData);
    };

    const [attributeModalShow, setAttributeModalShow] = useState<boolean>(false);
    const attributeHandleClose = () => {setAttributeModalShow(false);checkData();};
    const attributeHandleAddProductClick = (tempData:any) => {setAttributeModalShow(true);setEditData(tempData)};

    const [imageModalShow, setImageModalShow] = useState<boolean>(false);
    const imageHandleClose = () => {setImageModalShow(false);checkData();};
    const handleAddImageClick = (tempData:any) => { setImageModalShow(true);setEditData(tempData); };

    const [productModalShow, setProductModalShow] = useState<boolean>(false);
    const productHandleClose = () => {setProductModalShow(false);checkData();};
    const productHandleAddProductClick = (tempData:any) => {setProductModalShow(true);setEditData(tempData)};
  
    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= (Math.ceil(productList.length / pageSize))) {
        setCurrentPage(page);
      }
    };
  
    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setPageSize(Number(e.target.value));
      setCurrentPage(1);
    };

    let startPage = Math.max(1, currentPage - Math.floor(5 / 2));
    let endPage = Math.min((Math.ceil(productList.length / pageSize)), currentPage + Math.floor(5 / 2));
    const currentPageData = productList.slice(((currentPage - 1) * pageSize), ((currentPage - 1) * pageSize) + pageSize);
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
            }
        } catch (error) {
            console.error('Error fetching product data', error);
        }
    }

    const handleQuantityChange =async(id:number,quantity:number) => {
        await axios.put(UPDATE_PRODUCT_QUANTITY(id,quantity), null, {
            headers: {
              Authorization: CREATE_TOKEN(token),
            },
        });
        checkData();
    }

    const onStatusChange =async(id:number,status:string) => {
        await axios.put(UPDATE_PRODUCT_STATUS(id,status), null, {
            headers: {
              Authorization: CREATE_TOKEN(token),
            },
        });
        checkData();
    };

    useEffect(()=>{
        checkData();
    },[])

    return (
       <>
            <SellerAddEditProduct 
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleClose={handleClose}
                data={editData}
            />
            <SellerProductPreview 
                show={productModalShow}
                onHide={() => setProductModalShow(false)}
                handleClose={productHandleClose}
                data={editData}
            />
            <SellerAddEditAttributes 
                show={attributeModalShow}
                onHide={() => setAttributeModalShow(false)}
                handleClose={attributeHandleClose}
                data={editData}
            />
            <SellerAddImage 
                show={imageModalShow}
                onHide={() => setImageModalShow(false)}
                handleClose={imageHandleClose}
                data={editData}
            />
            <div className='shadow bg-light p-2 rounded-3 m-2'>
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
                        onClick={()=>handleAddProductClick(null)}
                        style={{ cursor: 'pointer' }} // Optional: change cursor to pointer to indicate it's clickable
                        >
                        <LiaPlusCircleSolid size={20} /> Add Product
                    </div>
                    </div>
                }
                <Table striped bordered hover responsive="xl" >
                <thead>
                    <tr>
                    {/* <th>Image</th> */}
                    <th>View</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
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
                        <td className='fw-bold'>
                            <div className="btn btn-sm px-2 text-light fw-bold rounded-pill py-1 my-1 d-flex"
                             onClick={()=>productHandleAddProductClick(item)}>
                                <BsEyeFill size={20} className='text-primary'/>
                            </div>
                        </td>
                        <td className='fw-bold'><ProductDescription description={item?.product?.name}/></td>
                        <td><ProductDescription description={item?.product?.description}/></td>
                        <td className='fw-bold'>
                            <span className="text-success fs-5 text-no-break">${item?.product?.discountPrice}</span><br/>
                            <span className="text-danger text-decoration-line-through">${item?.product?.price}</span>
                        </td>
                        <td className='fw-bold '>
                            <input type="number" className='form-control' style={{width:80}} value={item?.product?.quantity} 
                            onChange={(e)=>handleQuantityChange(item?.product?.id,Number(e.target.value))} />
                        </td>
                        <td className='fw-bold'>{item?.categories[0]?.categoryName}</td>
                        <td className='fw-bold text-warning'>
                            <select className="form-select" value={item?.product?.status} onChange={(e)=>onStatusChange(item?.product?.id,e.target.value)}>
                                {statuses.map((status) => (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </td>
                        {editable?
                            <td>
                                <div className="d-flex flex-wrap fs-6">
                                    <div className="btn btn-sm btn-info text-light fw-bold rounded-pill px-2 py-1 me-1 my-1 d-flex"
                                        onClick={()=>attributeHandleAddProductClick(item)}
                                    >
                                        <BsInfoCircleFill size={20} className='me-1'/> Attributes
                                    </div>
                                </div>
                            </td>:''
                        }
                        {
                        editable?
                            <td>
                                <div className="d-flex flex-wrap">
                                    <div className="btn btn-sm btn-success  rounded-pill px-2 py-1 d-flex me-1 my-1" onClick={()=>{handleAddProductClick(item)}}>
                                        <LiaPenAltSolid  size={20} className='me-1'/> Edit
                                    </div>
                                    <div className="btn btn-sm btn-primary rounded-pill px-2 py-1 d-flex me-1 my-1" onClick={()=>{handleAddImageClick(item)}}>
                                        <BiSolidImageAdd size={20} className='me-1'/> images
                                    </div>
                                    <div className="btn btn-sm btn-danger  rounded-pill px-2 py-1 d-flex me-1 my-1">
                                        <MdDelete size={20} className=''/> Delete
                                    </div>
                                </div>
                            </td>:''
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
                    
                    <Pagination.Next className="pagination-next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === (Math.ceil(productList.length / pageSize))} />
                    <Pagination.Last className="pagination-last" onClick={() => handlePageChange((Math.ceil(productList.length / pageSize)))} disabled={currentPage === (Math.ceil(productList.length / pageSize))} />
                </Pagination>
            </div>
      </> 
    );
};

export default SellerProducts