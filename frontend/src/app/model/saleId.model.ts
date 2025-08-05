export class SaleId {
    saleId:number;
    userId:number;
    customerId:number;
    productId:number;
    createdAt:Date;

    constructor (
        saleId:number,
        userId:number,
        customerId:number,
        productId:number,
        createdAt:Date
    ) {
        this.saleId = saleId;
        this.userId = userId;
        this.customerId = customerId;
        this.productId = productId;
        this.createdAt = createdAt;
    }
}