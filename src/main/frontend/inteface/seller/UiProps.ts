import { ReactNode } from "react";

export interface SidebarComponentProps {
    children: ReactNode;
}
export interface SellerProfileTabProps {
    tabs:string;
}

export interface SellerProductsProps {
    editable:boolean;
    addProduct:boolean;
    top:boolean;
}

export interface DashboardCardProps {
    title:string;
    description:string;
    value:string;
    theme:string;
}

export interface ProductDetails {
    categories:any;
    product:any;
    productAttributes:[];
    productImages:[];
    productReviews:[];
}

export interface SellerAddEditProp {
    data: null|ProductDetails;
    show: boolean;
    onHide: () => void;
    handleClose: () => void;
}

export interface ProductItemProps {
    description: string|null;
}