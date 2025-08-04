export interface SaleDTO {
    saleId:number;
    userId:number;
    customerId:number;
    productId:number;
    createdAt:Date;
    progress:string;
    activity:string;
    amount:string;
    lastUpdate:Date;
    notes:string;
}