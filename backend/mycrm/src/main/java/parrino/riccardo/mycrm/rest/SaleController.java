package parrino.riccardo.mycrm.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SaleController {
    
    @PostMapping("/createSale")
    public String createSale(@RequestBody String entity) {
        return entity;
    }

    @GetMapping("/readSale")
    public String readSale(@RequestParam String param) {
        return new String();
    }
    
    
    @GetMapping("/updateSale")
    public String updateSale(@RequestParam String param) {
        return new String();
    }
    

    @GetMapping("/deleteSale")
    public String deleteSale(@RequestParam String param) {
        return new String();
    }

}
