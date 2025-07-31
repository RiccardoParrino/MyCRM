CREATE TABLE MYCRM.USERS (
    userId INTEGER PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(255) NOT NULL,
    enabled NUMBER(1) DEFAULT 1,
    accountNonExpired NUMBER(1) DEFAULT 1,
    credentialsNonExpired NUMBER(1) DEFAULT 1,
    accountNonLocked NUMBER(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE MYCRM.CUSTOMER (	
    customerId INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phoneNumber VARCHAR(255),
    organizationName VARCHAR(255),
    city VARCHAR(255),
    region VARCHAR(255),
    state VARCHAR(255),
    coreBusiness VARCHAR(255),
    createdAt VARCHAR(255),
    notes VARCHAR(255)
);

CREATE TABLE MYCRM.roles (
    rolesId INTEGER PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE MYCRM.user_roles (
    userId INTEGER NOT NULL,
    roleId INTEGER NOT NULL,
    PRIMARY KEY (userId, roleId),
    FOREIGN KEY (userId) REFERENCES MYCRM.users(userId),
    FOREIGN KEY (roleId) REFERENCES MYCRM.roles(rolesId)
);

CREATE TABLE MYCRM.USER_RELATION (
    userId INTEGER,
    customerId INTEGER,
    PRIMARY KEY (userId, customerId),
   	FOREIGN KEY (userId) REFERENCES MYCRM.users(userId),
   	FOREIGN KEY (customerId) REFERENCES MYCRM.customer(customerId)
);

CREATE TABLE MYCRM.product (
    productId INTEGER PRIMARY KEY,
    name varchar(255) NOT NULL ,
    description varchar(255),
    unit varchar(255),
    price varchar(255) NOT NULL,
    stock INTEGER,
    notes varchar(255),
    producedBy INTEGER NOT NULL,
    FOREIGN KEY (producedBy) REFERENCES MYCRM.USERS(USERID),
    CONSTRAINT UserProduction UNIQUE (productId, producedBy)
);

CREATE TABLE MYCRM.PRODUCT_PURCHASE (
	productId INTEGER,
    customerId INTEGER,
    PRIMARY KEY (productId, customerId),
   	FOREIGN KEY (productId) REFERENCES MYCRM.product(productId),
   	FOREIGN KEY (customerId) REFERENCES MYCRM.customer(customerId)
);

CREATE TABLE MYCRM.SALES (
    saleId INTEGER,
	userId INTEGER,
	customerId INTEGER,
	productId INTEGER,
	salesDate DATE,
    progress VARCHAR(255),
    activity VARCHAR(255),
    amount VARCHAR(255),
    lastUpdate DATE,
    createdAt DATE,
	PRIMARY KEY (saleId, userId, customerId, productId, salesDate),
	FOREIGN KEY (userId) REFERENCES MYCRM.USERS (userId),
	FOREIGN KEY (customerId) REFERENCES MYCRM.CUSTOMER (customerId),
	FOREIGN KEY (productId) REFERENCES MYCRM.PRODUCT (productId)
);