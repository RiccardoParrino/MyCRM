package parrino.riccardo.mycrm.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import parrino.riccardo.mycrm.dto.ProductDTO;
import parrino.riccardo.mycrm.model.Product;
import parrino.riccardo.mycrm.service.ProductService;

@RestController
@RequestMapping("product")
public class ProductController {

    @Autowired
    private ProductService productService;
    
    @PostMapping(value = "create", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public Product createProduct(@RequestBody ProductDTO productDTO) {
        return productService.createProduct(productDTO);
    }

    @GetMapping(value = "read", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public List<Product> readProduct() {
        return productService.readProduct();
    }
    
    @PostMapping(value = "update", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public Boolean updateProduct(@RequestBody ProductDTO productDTO) {
        return this.productService.updateProduct(productDTO);
    }
    

    @GetMapping(value = "delete", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public Boolean deleteProduct(@RequestParam Long productId) {
        return productService.deleteProductById(productId);
    }

}
