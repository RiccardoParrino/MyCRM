INSERT INTO MYCRM.USERS
(USER_ID, EMAIL, NAME, PASSWORD, PHONE_NUMBER, SURNAME, USERNAME)
VALUES("MYCRM"."ISEQ$$_76950".nextval, 'riccardo@gmail.com', 'riccardo', 'mycrm', '1231231', 'parrino', 'ric');

INSERT INTO MYCRM.USERS
(USER_ID, EMAIL, NAME, PASSWORD, PHONE_NUMBER, SURNAME, USERNAME)
VALUES("MYCRM"."ISEQ$$_76950".nextval, 'francesco@gmail.com', 'francesco', 'mycrm', '1231231', 'rossi', 'fra');

INSERT INTO MYCRM.USERS
(USER_ID, EMAIL, NAME, PASSWORD, PHONE_NUMBER, SURNAME, USERNAME)
VALUES("MYCRM"."ISEQ$$_76950".nextval, 'giuseppe@gmail.com', 'giuseppe', 'mycrm', '1231231', 'verdi', 'giu');

INSERT INTO MYCRM.CUSTOMER
(CUSTOMER_ID, CITY, CORE_BUSINESS, CREATED_AT, EMAIL, NAME, NOTES, ORGANIZATION_NAME, PHONE_NUMBER, REGION, STATE, SURNAME)
VALUES("MYCRM"."ISEQ$$_76941".nextval, 'palermo', 'product', CURRENT_TIMESTAMP, 'giovanni@gmail.com', 'giovanni', 'ok', 'BIG', '123412341', 'sicily', 'italy', 'rossi');

INSERT INTO MYCRM.CUSTOMER
(CUSTOMER_ID, CITY, CORE_BUSINESS, CREATED_AT, EMAIL, NAME, NOTES, ORGANIZATION_NAME, PHONE_NUMBER, REGION, STATE, SURNAME)
VALUES("MYCRM"."ISEQ$$_76941".nextval, 'palermo', 'product', CURRENT_TIMESTAMP, 'paolo@gmail.com', 'paolo', 'ok', 'SEO srl', '123412341', 'sicily', 'italy', 'verdi');

INSERT INTO MYCRM.CUSTOMER
(CUSTOMER_ID, CITY, CORE_BUSINESS, CREATED_AT, EMAIL, NAME, NOTES, ORGANIZATION_NAME, PHONE_NUMBER, REGION, STATE, SURNAME)
VALUES("MYCRM"."ISEQ$$_76941".nextval, 'palermo', 'product', CURRENT_TIMESTAMP, 'augusto@gmail.com', 'augusto', 'ok', 'CEO srl', '123412341', 'lombardia', 'italy', 'rossi');

INSERT INTO MYCRM.PRODUCT
(PRODUCT_ID, DESCRIPTION, NAME, NOTES, PRICE, STOCK, UNIT)
VALUES("MYCRM"."ISEQ$$_76945".nextval, 'laptop asus', 'asus laptop', 'ok', '700.00', 10, 'pz');

INSERT INTO MYCRM.PRODUCT
(PRODUCT_ID, DESCRIPTION, NAME, NOTES, PRICE, STOCK, UNIT)
VALUES("MYCRM"."ISEQ$$_76945".nextval, 'laptop acer', 'acer laptop', 'ok', '800.00', 20, 'pz');

INSERT INTO MYCRM.PRODUCT
(PRODUCT_ID, DESCRIPTION, NAME, NOTES, PRICE, STOCK, UNIT)
VALUES("MYCRM"."ISEQ$$_76945".nextval, 'laptop apple', 'apple laptop', 'ok', '900.00', 30, 'pz');