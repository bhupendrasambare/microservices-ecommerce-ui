import axios from 'axios'
import { PRODUCT_CATEGORIES_URL } from 'Frontend/constants/urls'
import { ApiResponse, ProductCategories } from 'Frontend/inteface/seller/ApiRespose'
import { SellerAddEditProp } from 'Frontend/inteface/seller/UiProps'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'

const SellerAddEditProduct: React.FC<SellerAddEditProp> = (props) => {
    const [categories, setCategories] = useState<ProductCategories[]>([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const [name,setName] = useState<string>("");
    const [suk,setSuk] = useState<string>("");
    const [price,setPrice] = useState<number>(0.0);
    const [sellingPrice,setSellingPrice] = useState<number>(0.0);
    const [quantity,setQuantity] = useState<number>(0);
    const [description,setDescription] = useState<string>("");
    const [valid,setValid] = useState<boolean>(false);

    const [nameError,setNameError] = useState<string>("");
    const [sukError,setSukError] = useState<string>("");
    const [priceError,setPriceError] = useState<string>("");
    const [sellingPriceError,setSellingPriceError] = useState<string>("");
    const [quantityError,setQuantityError] = useState<string>("");
    const [descriptionError,setDescriptionError] = useState<string>("");

    const clearErrorMsg = () =>{
        setNameError("");setSukError("");setPriceError("");
        setSellingPriceError("");setQuantityError("");setDescriptionError("");
    }
    
    const validateForm = ()=>{
        if(name==null || name==""){ setNameError("Product Name is required");setValid(false);return; }
        if(suk==null || suk==""){ setSukError("SUK is required");setValid(false);return; }
        if(price==null || price<=0.009){ setPriceError("Price must be reater then 0.009");setValid(false);return; }
        if(sellingPrice==null || sellingPrice<=0.009){ setSellingPriceError("Selling price must be reater then 0.009");setValid(false);return; }
        if(quantity==null || quantity<=0){ setQuantityError("Quantity must be greater then 0");setValid(false);return; }
        console.log(description)
        if(description==null || description==""){ setDescriptionError("Description is required");setValid(false);return; }
        setValid(true);
    }

    const submitForm = (e:any) =>{
        e.preventDefault();
        setValid(true); clearErrorMsg(); validateForm();
        if(valid){

        }
    }

    const fetchCategories = async () => {
        try {
          const response = await axios.get<ApiResponse<ProductCategories[]|null|[]>>( PRODUCT_CATEGORIES_URL );
          if (response.data.status === 'SUCCESS' && response.data.data) {
            setCategories(response.data.data);
            if(response.data?.data?.length>0){
                setSelectedCategoryId(response.data?.data[0].id)
            }
          }
        } catch (error) { }
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = Number(event.target.value);
        setSelectedCategoryId(selectedId);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

  return (
    <div>
        <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='radius-20px'
        >
            <Modal.Header closeButton>
                <Modal.Title>{(props.data!=null)?"Edit Product":"Add Product"}</Modal.Title>
            </Modal.Header>
            <div className='p-5 bg=light'>
            <form className="form-card" onSubmit={submitForm}>
                    <div className="row justify-content-between text-left mt-2">
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <label className={("form-control-label ")+(((nameError!="")?"text-danger":""))}>
                                {(nameError!="")?nameError:"Product Name"}<span className="text-danger"> *</span>
                                <input className='form-control' onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter Product Name"/>
                            </label>
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <label className={("form-control-label ")+(((sukError!="")?"text-danger":""))}>{(sukError!="")?sukError:"SUK Code"}<span className="text-danger"> *</span>
                                <input className='form-control' onChange={(e)=>setSuk(e.target.value)} value={suk} type="text" placeholder="Enter SUK code"/>
                            </label>
                        </div>
                    </div>
                    <div className="row justify-content-between text-left mt-2">
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <label className={("form-control-label ")+(((priceError!="")?"text-danger":""))}>{(priceError!="")?priceError:"Product price $"}<span className="text-danger"> *</span>
                                <input className='form-control' step="0.01" onChange={(e)=>setPrice(Number(e.target.value))} value={price} type="number" placeholder="Enter product price" />
                            </label>
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <label className={("form-control-label ")+(((sellingPriceError!="")?"text-danger":""))}>{(sellingPriceError!="")?sellingPriceError:"Selling price $"}<span className="text-danger"> *</span>
                                <input className='form-control' step="0.01" onChange={(e)=>setSellingPrice(Number(e.target.value))} value={sellingPrice} type="number" placeholder="Enter Selling price" />
                            </label>
                        </div>
                    </div>
                    <div className="row justify-content-between text-left mt-2">
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <label className={("form-control-label ")+(((quantityError!="")?"text-danger":""))}>{(quantityError!="")?quantityError:"Quantity"}<span className="text-danger"> *</span>
                                <input className='form-control' onChange={(e)=>setQuantity(Number(e.target.value))} value={quantity} type="number" placeholder="Enter avilable quantity" />
                            </label>
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <label className="form-control-label ">Category<span className="text-danger"> *</span>
                                <select id="category-select" className='form-control' value={selectedCategoryId ?? ''} onChange={handleCategoryChange}>
                                    <option value="" disabled>Select a category</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id ?? ''}>
                                        {category.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="row justify-content-between text-left mt-2">
                        <div className="form-group col-12 flex-column d-flex">
                            <label className={("form-control-label ")+(((descriptionError!="")?"text-danger":""))}>{(descriptionError!="")?descriptionError:"Product description"}<span className="text-danger"> *</span>
                                <textarea className="form-control" onChange={e => setDescription(e.target.value)} value={description} placeholder="Enter product description" />
                            </label>
                        </div>
                    </div>
                    <div className="row justify-content-end mt-2">
                        <div className="form-group mt-4 d-flex w-100 justify-content-end">
                            <button type="submit" className="btn btn-block btn-primary p-2">{(props.data!=null)?"Edit Product":"Add Product"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    </div>
  )
}

export default SellerAddEditProduct