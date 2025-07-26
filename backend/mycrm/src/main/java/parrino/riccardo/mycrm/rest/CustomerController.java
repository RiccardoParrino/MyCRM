package parrino.riccardo.mycrm.rest;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class CustomerController {
    
    @PostMapping("/createCustomer")
    public String createCustomer(@RequestBody String entity) {
        return entity;
    }

    @GetMapping("/readCustomer")
    public String readCustomer(@RequestParam String param) {
        return new String();
    }
    
    
    @GetMapping("/updateCustomer")
    public String updateCustomer(@RequestParam String param) {
        return new String();
    }
    

    @GetMapping("/deleteCustomer")
    public String deleteCustomer(@RequestParam String param) {
        return new String();
    }
    
}
