export interface ApiResponse<T = any> {
    status: string;
    code: string|null;
    message: string|null;
    data: T|null|[];
}

export interface ProductCategories {
    id: number|null; 
    name: string|null;
    description?: string|null;
    createdAt: string|null;
    updatedAt: string|null; 
}