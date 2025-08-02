package parrino.riccardo.mycrm.service;

import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.dto.ProductDTO;

@Service
public class ProductService {
    
    public String createProduct(ProductDTO productDto) {
        return "entity";
    }

    public String readProduct(String param) {
        return param;
    }
    
    public String updateProduct(String param) {
        return param;
    }
    
    public String deleteProduct(String param) {
        return param;
    }

}
