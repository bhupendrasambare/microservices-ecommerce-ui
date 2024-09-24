import axios from 'axios'
import { ADD_PRODUCT_URL, CREATE_TOKEN, PRODUCT_CATEGORIES_URL } from 'Frontend/constants/urls'
import { ApiResponse, ProductCategories } from 'Frontend/inteface/seller/ApiRespose'
import { SellerAddEditProp } from 'Frontend/inteface/seller/UiProps'
import { RootState } from 'Frontend/storage'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const SellerAddEditProduct: React.FC<SellerAddEditProp> = (props) => {
    const token = useSelector((state: RootState) => state.auth.token);
    const [categories, setCategories] = useState<ProductCategories[]>([]);
    const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
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
    const [categoryError,setCategoryError] = useState<string>("");
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
        if(description==null || description==""){ setDescriptionError("Description is required");setValid(false);return; }
        if(selectedCategoryIds==null || selectedCategoryIds.length<=0){ setCategoryError("Please select atlest one category");setValid(false);return; }
        setValid(true);
    }

    const submitForm = (e:any) =>{
        e.preventDefault();
        setValid(true); clearErrorMsg(); validateForm();
        if(valid){
            axios({
                url: ADD_PRODUCT_URL,
                method: 'POST',
                headers:{
                    Authorization:CREATE_TOKEN(token)
                },
                data: {
                    "name": name,
                    "description": description,
                    "sku": suk,
                    "price": price,
                    "discountPrice": sellingPrice,
                    "quantity": quantity,
                    "status": "AVAILABLE",
                    "categoryIds": selectedCategoryIds
                },
            })
            .then((res) => {
                const addProductResponse:ApiResponse = res.data;
                if(addProductResponse.status=="SUCCESS"){
                    props.handleClose();
                }
            })
        }
    }

    const fetchCategories = async () => {
        try {
          const response = await axios.get<ApiResponse<ProductCategories[]|null|[]>>( PRODUCT_CATEGORIES_URL );
          if (response.data.status === 'SUCCESS' && response.data.data) {
            setCategories(response.data.data);
          }
        } catch (error) { }
    };

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleCheckboxChange = (categoryId: number|null) => {
        if(categoryId!=null){
            setSelectedCategoryIds((prevSelected) =>
                prevSelected.includes(categoryId)
                ? prevSelected.filter((id) => id !== categoryId) // Remove if already selected
                : [...prevSelected, categoryId] // Add if not selected
            );
        }
    };

    useEffect(() => {
        fetchCategories();
        if(props.data?.product!=null){
            var productData = props.data.product;
            if(productData.name!=null){ setName(productData.name); }
            if(productData.sku!=null){ setSuk(productData.sku); }
            if(productData.price!=null){ setPrice(productData.price); }
            if(productData.discountPrice!=null){ setSellingPrice(productData.discountPrice); }
            if(productData.quantity!=null){ setQuantity(productData.quantity); }
            if(productData.description!=null){ setDescription(productData.description); }
            if(props.data.categories!=null && props.data.categories.length>0){
                props.data.categories.map((data:any) => (
                    setSelectedCategoryIds((prevSelected) =>
                        prevSelected.includes(data.id)
                        ? prevSelected.filter((id) => id !== data.id) // Remove if already selected
                        : [...prevSelected, data.id] // Add if not selected
                    )
                ))
            }
        }
        console.log(props.data?.product)
    }, [props.data]);


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
                            <label className={("form-control-label ")+(((categoryError!="")?"text-danger":""))}>{(categoryError!="")?categoryError:"Categories"}<span className="text-danger"> *</span>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-outline-secondary dropdown-toggle form-control"
                                        type="button"
                                        onClick={toggleDropdown}
                                        aria-expanded={dropdownOpen}
                                    >
                                    {selectedCategoryIds.length === 0 ? "Select categories" : `${selectedCategoryIds.length} selected`}
                                    </button>

                                    {dropdownOpen && (
                                    <ul className="dropdown-menu show" style={{ width: '100%' }}>
                                        {categories.map((category) => (
                                        <li key={category.id} className="dropdown-item">
                                            {category.id && 
                                            <input
                                            type="checkbox"
                                            id={`category-${category.id}`}
                                            checked={selectedCategoryIds.includes(category.id)}
                                            onChange={() => handleCheckboxChange(category.id)}
                                            />
                                            }
                                            <label htmlFor={`category-${category.id}`} className="ms-2">{category.name}</label>
                                        </li>
                                        ))}
                                    </ul>
                                    )}
                                </div>
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