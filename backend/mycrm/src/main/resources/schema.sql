CREATE TABLE product (
    productId int,
    name varchar(255),
    description varchar(255),
    unit varchar(255),
    price varchar(255),
    stock int,
    notes varchar(255)
);

CREATE TABLE sale (
    saleId int,
    userId varchar(255),
    productId varchar(255),
    progress varchar(255),
    activity varchar(255),
    amount varchar(255),
    date DATE,
    createdAt DATE
);

CREATE TABLE customer (
    customerId int,
    name varchar(255),
    email varchar(255),
    phoneNumber varchar(255),
    organizationName varchar(255),
    city varchar(255),
    region varchar(255),
    state varchar(255),
    coreBusiness varchar(255),
    createdAt DATE,
    notes varchar(255)
);

CREATE TABLE users (
    userId int,
    username varchar(255),
    password varchar(255),
    name varchar(255),
    surname varchar(255),
    email varchar(255),
    phoneNumber varchar(255)
);
