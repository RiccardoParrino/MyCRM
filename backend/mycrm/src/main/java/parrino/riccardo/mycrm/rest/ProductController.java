package parrino.riccardo.mycrm.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
    
    @PostMapping("/createProduct")
    public String createProduct(@RequestBody String entity) {
        return entity;
    }

    @GetMapping("/readProduct")
    public String readProduct(@RequestParam String param) {
        return new String();
    }
    
    
    @GetMapping("/updateProduct")
    public String updateProduct(@RequestParam String param) {
        return new String();
    }
    

    @GetMapping("/deleteProduct")
    public String deleteProduct(@RequestParam String param) {
        return new String();
    }

}
