export class Product {
    name:string;
    description:string;
    unit:string;
    price:string;
    stock:number;
    notes:string;

    constructor (
        name:string,
        description:string,
        unit:string,
        price:string,
        stock:number,
        notes:string
    ) {
        this.name = name;
        this.description = description;
        this.unit = unit;
        this.price = price;
        this.stock = stock;
        this.notes = notes;
    }
}