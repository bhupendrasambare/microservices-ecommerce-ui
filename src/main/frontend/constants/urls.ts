import config from "Frontend/config";

export const LOGIN_URL = config.baseUrl+"/auth/login";
export const VALIDATE_URL = config.baseUrl+"/users/profile";
export const CREATE_TOKEN = (token:string|null) => "Bearer "+token;
export const CREATE_URL = (url:string|null) => config.baseUrl+url;