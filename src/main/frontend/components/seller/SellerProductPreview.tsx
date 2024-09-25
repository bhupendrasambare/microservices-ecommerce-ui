import { SellerAddEditProp } from 'Frontend/inteface/seller/UiProps'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { RxCross2 } from 'react-icons/rx'

const SellerProductPreview: React.FC<SellerAddEditProp> = (props) => {

    const[defaultImage,setImage] = useState<string>("https://picsum.photos/200/200")
    const[reviewCount,setReviewCount] = useState<number>(0.4)

    const changeImage = (imageUrl:string) =>{
        setImage(imageUrl);
    }

    useEffect(()=>{
        props.data?.productImages?.map((data:any) => {
            if(data?.imageUrl!=null && data?.primary!=null){
                setImage(data.imageUrl);
                return;
            }
        })
    },[props.data?.productImages])

    useEffect(()=>{
        var count = 0.0;
        props.data?.productReviews?.map((data:any) => {
            if(data?.rating!=null){
                count += data.rating;
            }
        })
        setReviewCount(3.4)
    },[props.data?.productReviews])

  return (
    <div>
        <Modal
        show={props.show} onHide={props.handleClose}
        size="xl"
        centered
        className='radius-20px'
        >
        <div className="d-flex w-100 justify-content-end px-3  pt-3" onClick={props.handleClose}>
            <RxCross2 size={30}/>
        </div>
            <div className="px-3 pb-3 rounded-5">
                <section className="py-5">
                    <div className="row gx-5">
                    <aside className="col-lg-6">
                        <div className="border rounded-4 mb-3 d-flex justify-content-center">
                        <a data-fslightbox="mygalley" target="_blank" data-type="image" style={{height:400}}>
                            <img style={{height:400}} className="w-100 m-auto rounded-4 fit" src={defaultImage} />
                        </a>
                        </div>
                        <div className="d-flex flex-wrap justify-content-start mb-3">
                            {props.data?.productImages?.map((data:any) => (
                                <a onClick={()=>changeImage(data.imageUrl)} className="border m-1 rounded-2 item-thumb shadow" >
                                    <img width="60" height="60" className="rounded-2" src={data.imageUrl} />
                                </a>
                            ))}
                        </div>
                    </aside>
                    <main className="col-lg-6">
                        <div className="ps-lg-3">
                        <h4 className="title text-dark">
                            {props.data?.product?.name}
                        </h4>
                        <div className="d-flex flex-row my-3">
                            <div className="text-warning mb-1 me-2">
                            { (reviewCount>0 && reviewCount<1) && <i className="fas fa-star-half-alt"></i> }
                            { (reviewCount>=1) && <i className="fa fa-star"></i> }
                            { (reviewCount>1 && reviewCount<2) && <i className="fas fa-star-half-alt"></i> }
                            { (reviewCount>=2) && <i className="fa fa-star"></i> }
                            { (reviewCount>2 && reviewCount<3) && <i className="fas fa-star-half-alt"></i> }
                            { (reviewCount>=3) && <i className="fa fa-star"></i> }
                            { (reviewCount>3 && reviewCount<4) && <i className="fas fa-star-half-alt"></i> }
                            { (reviewCount>=4) && <i className="fa fa-star"></i> }
                            { (reviewCount>4 && reviewCount<5) && <i className="fas fa-star-half-alt"></i> }
                            { (reviewCount>=5) && <i className="fa fa-star"></i> }
                            <span className="ms-1">
                                {reviewCount}
                            </span>
                            </div>
                            <span className={((props.data?.product?.status=="AVAILABLE")?"text-success ms-2 fw-bold":
                                            (props.data?.product?.status=="OUT_OF_STOCK")?"text-warning ms-2 fw-bold":"text-danger ms-2 fw-bold")}>{props.data?.product?.status}</span>
                        </div>

                        <div className="mb-3">
                            <span className="text-success fs-5 text-no-break me-2 fw-bold">${props.data?.product?.discountPrice}</span>
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
                </section>
            </div>
        </Modal>
    </div>
  )
}

export default SellerProductPreview