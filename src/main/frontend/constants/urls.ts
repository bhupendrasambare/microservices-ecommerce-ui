import config from "Frontend/config";

export const LOGIN_URL = config.baseUrl+"/auth/login";
export const VALIDATE_URL = config.baseUrl+"/users/profile";
export const PRODUCT_CATEGORIES_URL = config.baseUrl+"/product/public/category/get";
export const ADD_PRODUCT_URL = config.baseUrl+"/product/add";
export const ADD_PRODUCT_ATTRIBUTE_URL = (attributeId:number|null) => ((config.baseUrl+"/product/attributes"))+((attributeId==null)?"":"/"+attributeId);
export const ADD_PRODUCT_IMAGE_URL = (productId:number) => config.baseUrl+"/product/"+productId+"/images";
export const DELETE_PRODUCT_IMAGE_URL = (productId:number,imageId:number) => config.baseUrl+"/product/"+productId+"/images/"+imageId;
export const DELETE_PRODUCT_ATTRIBUTE_URL = (attributeId:number) =>config.baseUrl+"/product/attributes/"+attributeId;
export const LOGIN_USER_PRODUCT_FETCH = config.baseUrl+"/product/get";


export const CREATE_TOKEN = (token:string|null) => "Bearer "+token;
export const CREATE_URL = (url:string|null) => config.baseUrl+url;