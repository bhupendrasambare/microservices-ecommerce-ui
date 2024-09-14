import { ReactNode } from "react";

export interface SidebarComponentProps {
    children: ReactNode;
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