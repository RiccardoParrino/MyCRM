export class SaleId {
    saleId:number;
    username:string;
    customerId:number;
    productId:number;
    createdAt:Date;

    constructor (
        saleId:number,
        username:string,
        customerId:number,
        productId:number,
        createdAt:Date
    ) {
        this.saleId = saleId;
        this.username = username;
        this.customerId = customerId;
        this.productId = productId;
        this.createdAt = createdAt;
    }
}