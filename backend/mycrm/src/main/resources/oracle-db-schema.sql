CREATE TABLE MYCRM.product (
    productId INTEGER,
    name varchar(255),
    description varchar(255),
    unit varchar(255),
    price varchar(255),
    stock INTEGER,
    notes varchar(255)
);

CREATE TABLE sale (
    saleId int,
    userId int,
    productId int,
    customerId int,
    progress varchar(255),
    activity varchar(255),
    amount varchar(255),
    date DATE,
    createdAt DATE
);

CREATE TABLE MYCRM.CUSTOMER (
    customerId INTEGER,
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

CREATE TABLE MYCRM.USERS (
    userId INTEGER,
    username varchar(255),
    password varchar(255),
    name varchar(255),
    surname varchar(255),
    email varchar(255),
    phoneNumber varchar(255)
);
