export class User {
    username:string;
    password:string;
    name:string;
    surname:string;
    email:string;
    phoneNumber:string;
    organizationName:string;

    constructor (
        username:string,
        password:string,
        name:string,
        surname:string,
        email:string,
        phoneNumber:string,
        organizationName:string
    ) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.organizationName = organizationName;
    }
}