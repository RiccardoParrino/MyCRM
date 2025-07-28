import { createDocumentRegistry } from "typescript";

export class Customer {
    name:string;
    surname:string;
    email:string;
    phoneNumber:string;
    organization:string;
    createdAt:Date;
    notes:string;

    constructor (
        name:string,
        surname:string,
        email:string,
        phoneNumber:string,
        organization:string,
        createdAt:Date,
        notes:string
    ) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.organization = organization;
        this.createdAt = createdAt;
        this.notes = notes;
    }
}