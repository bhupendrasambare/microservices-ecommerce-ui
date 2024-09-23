import { SellerAddEditProp } from 'Frontend/inteface/seller/UiProps'
import React, { useState } from 'react'
import { Form, Modal, Table } from 'react-bootstrap'
import ProductDescription from './ProductDescription'
import { MdDelete } from 'react-icons/md'
import { ADD_PRODUCT_ATTRIBUTE_URL, CREATE_TOKEN, DELETE_PRODUCT_ATTRIBUTE_URL } from 'Frontend/constants/urls'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from 'Frontend/storage'
import { ApiResponse } from 'Frontend/inteface/seller/ApiRespose'
import { LiaPenAltSolid } from 'react-icons/lia'

const SellerAddEditAttributes: React.FC<SellerAddEditProp> = (props) => {
    const token = useSelector((state: RootState) => state.auth.token);
    const [selectedId,setSelectedId] = useState(null);
    const [attributeName,setAttributeValue] = useState("");
    const [attributeDescription,setAttributeDescription] = useState("");
    const [attributeNameError,setAttributeValueError] = useState("");
    const [attributeDescriptionError,setAttributeDescriptionError] = useState("");
    const [valid,setValid] = useState<boolean>(false);

    const clearForm = () =>{
        setAttributeDescription("");setAttributeDescriptionError("");
        setAttributeValue("");setAttributeValueError("");
    }

    const clearFormError = () =>{
        setAttributeValueError("");setAttributeValueError("");
    }

    const validateForm = () =>{
        if(attributeName==null || attributeName==""){ setAttributeValueError("Name is required");setValid(false);return; }
        if(attributeDescription==null || attributeDescription==""){ setAttributeDescriptionError("Description is required");setValid(false);return; }
        setValid(true);
    }

    const submitForm = (e:any) =>{
        e.preventDefault();
        console.log(attributeName)
        setValid(true); clearFormError(); validateForm();
        if(valid){
            console.log(attributeName)
            axios({
                url: ADD_PRODUCT_ATTRIBUTE_URL(selectedId),
                method: (selectedId==null)?"POST":"PUT",
                headers:{
                    Authorization:CREATE_TOKEN(token)
                },
                data: {
                    "productId": props.data?.product?.id,
                    "name": attributeName,
                    "value": attributeDescription
                },
            })
            .then((res) => {
                const addProductResponse:ApiResponse = res.data;
                if(addProductResponse.status=="SUCCESS"){
                    props.handleClose();
                }
            })
        }
        clearForm();
    }

    const setUpdateData = (data:any) => {
        setAttributeValue(data.attributeName);
        setAttributeDescription(data.attributeValue);
        setSelectedId(data.id);
    }

    const deleteAttribute = (attributeId:number) =>{
        axios({
            url: DELETE_PRODUCT_ATTRIBUTE_URL(attributeId),
            method: 'DELETE',
            headers:{
                Authorization:CREATE_TOKEN(token)
            }
        })
        .then((res) => {
            const addProductResponse:ApiResponse = res.data;
            if(addProductResponse.status=="SUCCESS"){
                props.handleClose();
            }
        })
    }

  return (
    <div>
        <Modal
        show={props.show} onHide={props.handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='radius-20px'
        >
            <Modal.Header closeButton>
                <Modal.Title className='fs-5'><span className='fw-bold text-dark'> {props.data?.product?.name}</span> : Add Edit product attributes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover responsive="lg">
                    <thead>
                        <tr>
                            <th>Attribute name</th>
                            <th>Attribute description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data?.productAttributes?.map((data:any) => (
                            <tr>
                                <td>{data?.attributeName}</td>
                                <td><ProductDescription description={typeof data?.attributeValue === 'string' ? data.attributeValue : null}/></td>
                                <td className='d-flex flex-wrap'>
                                    <div className="btn btn-sm btn-success rounded-pill px-2 py-1 d-flex me-1 my-1" onClick={()=>setUpdateData(data)}>
                                        <LiaPenAltSolid size={20} className='me-1'/> Edit
                                    </div>
                                    <div className="btn btn-sm btn-danger rounded-pill px-2 py-1 d-flex me-1 my-1" onClick={()=>deleteAttribute(data.id)}>
                                        <MdDelete size={20} className='me-1'/> Delete
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Form className='card p-3 shadow mt-5' onSubmit={submitForm}>
                    <div className="form-group col-12 flex-column d-flex">
                        <label className={("form-control-label ")+(((attributeNameError!="")?"text-danger":""))}>
                            {(attributeNameError!="")?attributeNameError:"Attribute name"}<span className="text-danger"> *</span>
                            <input className='form-control' onChange={(e)=>setAttributeValue(e.target.value)} value={attributeName} type="text" placeholder="Enter attribute name"/>
                        </label>
                    </div>
                    <div className="form-group col-12 flex-column d-flex">
                        <label className={("form-control-label ")+(((attributeDescriptionError!="")?"text-danger":""))}>
                            {(attributeDescriptionError!="")?attributeDescriptionError:"Attribute description"}<span className="text-danger"> *</span>
                            <input className='form-control' onChange={(e)=>setAttributeDescription(e.target.value)} value={attributeDescription} type="text" placeholder="Enter attribute description"/>
                        </label>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <button type="submit" className='btn btn-sm btn-success rounded-pill'>Add attribute</button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default SellerAddEditAttributes