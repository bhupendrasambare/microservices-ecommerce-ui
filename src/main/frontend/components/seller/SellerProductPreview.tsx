import { SellerAddEditProp } from 'Frontend/inteface/seller/UiProps'
import React from 'react'
import { Modal } from 'react-bootstrap'

const SellerProductPreview: React.FC<SellerAddEditProp> = (props) => {
  return (
    <div>
        <Modal
        show={props.show} onHide={props.handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='radius-20px'
        >
            <div className="p-3 rounded-5">
                <section className="py-5">
                <div className="container">
                    <div className="row gx-5">
                    <aside className="col-lg-6">
                        <div className="border rounded-4 mb-3 d-flex justify-content-center">
                        <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">

                            <img style={{maxHeight:"100vh"}} className="w-100 m-auto rounded-4 fit" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
                        </a>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                        <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" 
                        href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" >
                            <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" />
                        </a>
                        <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp"
                         >
                            <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp" />
                        </a>
                        <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp"
                         >
                            <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp" />
                        </a>
                        <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp"
                         >
                            <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp" />
                        </a>
                        <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" 
                        >
                            <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
                        </a>
                        </div>
                    </aside>
                    <main className="col-lg-6">
                        <div className="ps-lg-3">
                        <h4 className="title text-dark">
                            {props.data?.product?.name}
                        </h4>
                        <div className="d-flex flex-row my-3">
                            <div className="text-warning mb-1 me-2">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <span className="ms-1">
                                4.5
                            </span>
                            </div>
                            <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                            <span className={((props.data?.product?.status=="AVAILABLE")?"text-success ms-2":
                                            (props.data?.product?.status=="OUT_OF_STOCK")?"text-warning ms-2":"text-danger ms-2")}>{props.data?.product?.status}</span>
                        </div>

                        <div className="mb-3">
                            <span className="text-success fs-5 text-no-break me-2">${props.data?.product?.discountPrice}</span>
                            <span className="text-danger text-decoration-line-through">${props.data?.product?.price}</span>
                        </div>

                        <p>
                            <div dangerouslySetInnerHTML={{ __html: props.data?.product?.description }} />
                        </p>
                        <hr/>
                        <div className="mt-5">
                            {props.data?.productAttributes?.map((data:any) => (
                                <div className="row">
                                    <dt className="col-6">{data?.attributeName}</dt>
                                    <dd className="col-6">{data?.attributeValue}</dd>
                                </div>
                            ))}
                        </div>
                        
                        </div>
                    </main>
                    </div>
                </div>
                </section>
            </div>
        </Modal>
    </div>
  )
}

export default SellerProductPreview