import { SaleId } from "./saleId.model";

export class Sale {
    saleId:SaleId;
    userId:number;
    customerId:number;
    productId:number;
    progress:string;
    activity:string;
    amount:string;
    lastUpdate:Date;
    notes:string;

    constructor (
        saleId:SaleId,
        userId:number,
        customerId:number,
        productId:number,
        progress:string,
        activity:string,
        amount:string,
        lastUpdate:Date,
        notes:string
    ) {
        this.saleId = saleId;
        this.userId = userId;
        this.customerId = customerId;
        this.productId = productId;
        this.progress = progress;
        this.activity = activity;
        this.amount = amount;
        this.lastUpdate = lastUpdate;
        this.notes = notes;
    }
}