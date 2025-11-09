export interface IProductDetails {
    id?: number;
    name: string;
    description?: string;
    mfgDate: Date;
    expiryDate: Date;
    quantity: number;
    price: number;
    image_url?: string;
    
}