export class Product {
    productId:number;
    name:string;
    description:string;
    unit:string;
    price:string;
    stock:number;
    notes:string;

    constructor (
        productId:number,
        name:string,
        description:string,
        unit:string,
        price:string,
        stock:number,
        notes:string
    ) {
        this.productId = productId;
        this.name = name;
        this.description = description;
        this.unit = unit;
        this.price = price;
        this.stock = stock;
        this.notes = notes;
    }
}