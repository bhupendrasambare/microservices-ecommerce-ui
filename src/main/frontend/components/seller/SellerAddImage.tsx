import { SellerAddEditProp } from 'Frontend/inteface/seller/UiProps'
import React, { useState } from 'react'
import { Button, Card, Form, Modal, Table } from 'react-bootstrap'
import { ADD_PRODUCT_IMAGE_URL, CREATE_TOKEN, DELETE_PRODUCT_IMAGE_URL } from 'Frontend/constants/urls'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from 'Frontend/storage'
import { ApiResponse } from 'Frontend/inteface/seller/ApiRespose'

const SellerAddImage: React.FC<SellerAddEditProp> = (props) => {
    const token = useSelector((state: RootState) => state.auth.token);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [primary, setPrimary] = useState(false);


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          setImageFile(file);
          const reader = new FileReader();
          reader.onload = () => setImagePreview(reader.result as string);
          reader.readAsDataURL(file);
        }
    };

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        if (props.data?.product?.id != null && imageFile) {
          try {
            const formData = new FormData();
            formData.append('file', imageFile);
            formData.append('primary', String(primary));
    
            const response = await axios.post(ADD_PRODUCT_IMAGE_URL(props.data.product.id), formData, {
              headers: {
                Authorization: CREATE_TOKEN(token),
              },
            });
    
            const addProductResponse = response.data;
            if (addProductResponse.status === 'SUCCESS') {
                setImagePreview(null);setImageFile(null);
              props.handleClose();
            }
          } catch (error) {
            console.error('Error uploading the product image:', error);
          }
        }
    };

    const deleteImage = (imageId:number) =>{
        if(props.data?.product?.id!=null){
            axios({
                url: DELETE_PRODUCT_IMAGE_URL(props.data.product.id,imageId),
                method: "DELETE",
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
                <Modal.Title className='fs-5'><span className='fw-bold text-dark'> {props.data?.product?.name}</span> : Add product images</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-start my-3 shadow rounded-3 p-3 align-items-center">
                    {props.data?.productImages?.map((data:any) => (
                        <Card className='mx-3' style={{ width: '8rem' }}>
                            <Card.Img variant="top" src={data.imageUrl} />
                        </Card>
                    ))}
                </div>
                <Form onSubmit={submitForm}>
                    <div className="d-flex">
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control type="file" onChange={handleImageChange} accept="image/*" />
                        </Form.Group>
                        {imagePreview && (
                            <div className="my-3">
                            <img src={imagePreview} alt="Selected" style={{ width: '100%', maxHeight: '150px', objectFit: 'contain' }} />
                            </div>
                        )}
                    </div>
                    <Form.Group controlId="formPrimary" className="mb-3">
                        <Form.Check
                        type="checkbox"
                        label="Primary Image"
                        checked={primary}
                        onChange={(e) => setPrimary(e.target.checked)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default SellerAddImage