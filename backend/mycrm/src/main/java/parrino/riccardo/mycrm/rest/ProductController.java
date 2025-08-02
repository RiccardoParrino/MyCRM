package parrino.riccardo.mycrm.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import parrino.riccardo.mycrm.dto.ProductDTO;
import parrino.riccardo.mycrm.model.Product;
import parrino.riccardo.mycrm.service.ProductService;

@RestController("product")
public class ProductController {

    @Autowired
    private ProductService productService;
    
    @PostMapping("/create")
    public String createProduct(@RequestBody ProductDTO productDTO) {
        return productService.createProduct(productDTO);
    }

    @GetMapping("/read")
    public Product readProduct(@RequestParam Long productId) {
        return productService.readProduct(productId).get();
    }
    
    @PostMapping("/update")
    public Boolean updateProduct(@RequestBody ProductDTO productDTO) {
        this.productService.updateProduct(productDTO);
        return true;
    }
    
    @GetMapping("/delete")
    public Boolean deleteProduct(@RequestParam Long productId) {
        return productService.deleteProductById(productId);
    }

}
