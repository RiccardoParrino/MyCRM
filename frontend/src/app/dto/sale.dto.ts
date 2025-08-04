import { CustomerDTO } from "./customer.dto";
import { ProductDTO } from "./product.dto";
import { SaleIdDTO } from "./saleId.dto";
import { UserDTO } from "./user.dto";

export interface SaleDTO {
    saleId:SaleIdDTO;
    user:UserDTO;
    customer:CustomerDTO;
    product:ProductDTO;
    progress:string;
    activity:string;
    amount:string;
    lastUpdate:Date;
    notes:string;
}