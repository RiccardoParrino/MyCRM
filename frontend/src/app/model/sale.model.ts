import { Customer } from "./customer.model";
import { Product } from "./product.model";
import { SaleId } from "./saleId.model";
import { User } from "./user.model";

export class Sale {
    saleId:SaleId;
    user:User;
    customer:Customer;
    product:Product;
    progress:string;
    activity:string;
    amount:string;
    lastUpdate:Date;
    notes:string;

    constructor (
        saleId:SaleId,
        user:User,
        customer:Customer,
        product:Product,
        progress:string,
        activity:string,
        amount:string,
        lastUpdate:Date,
        notes:string
    ) {
        this.saleId = saleId;
        this.user = user;
        this.customer = customer;
        this.product = product;
        this.progress = progress;
        this.activity = activity;
        this.amount = amount;
        this.lastUpdate = lastUpdate;
        this.notes = notes;
    }
}