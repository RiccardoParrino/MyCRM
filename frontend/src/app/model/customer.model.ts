export class Customer {
    customerId:number;
    name:string;
    surname:string;
    email:string;
    phoneNumber:string;
    organizationName:string;
    city:string;
    region:string;
    state:string;
    coreBusiness:string;
    createdAt:Date;
    notes:string;

    constructor (
        customerId:number,
        name:string,
        surname:string,
        email:string,
        phoneNumber:string,
        organizationName:string,
        city:string,
        region:string,
        state:string,
        coreBusiness:string,
        createdAt:Date,
        notes:string
    ) {
        this.customerId = customerId;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.organizationName = organizationName;
        this.city = city;
        this.region = region;
        this.state = state;
        this.coreBusiness = coreBusiness;
        this.createdAt = createdAt;
        this.notes = notes;
    }
}