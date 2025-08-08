import { SaleId } from "./saleId.model";

export class Sale {
    saleId:SaleId;
    username:string;
    customerId:number;
    productId:number;
    progress:string;
    activity:string;
    amount:string;
    lastUpdate:Date;
    notes:string;

    constructor (
        saleId:SaleId,
        username:string,
        customerId:number,
        productId:number,
        progress:string,
        activity:string,
        amount:string,
        lastUpdate:Date,
        notes:string
    ) {
        this.saleId = saleId;
        this.username = username;
        this.customerId = customerId;
        this.productId = productId;
        this.progress = progress;
        this.activity = activity;
        this.amount = amount;
        this.lastUpdate = lastUpdate;
        this.notes = notes;
    }
}