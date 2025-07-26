package parrino.riccardo.mycrm.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import parrino.riccardo.mycrm.service.ProductService;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;
    
    @PostMapping("/createProduct")
    public String createProduct(@RequestBody String entity) {
        return productService.createProduct(entity);
    }

    @GetMapping("/readProduct")
    public String readProduct(@RequestParam String param) {
        return productService.readProduct(param);
    }
    
    
    @GetMapping("/updateProduct")
    public String updateProduct(@RequestParam String param) {
        return productService.updateProduct(param);
    }
    

    @GetMapping("/deleteProduct")
    public String deleteProduct(@RequestParam String param) {
        return productService.deleteProduct(param);
    }

}
