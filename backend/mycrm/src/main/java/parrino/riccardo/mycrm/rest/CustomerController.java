package parrino.riccardo.mycrm.rest;

import org.springframework.web.bind.annotation.RestController;

import parrino.riccardo.mycrm.service.CustomerService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class CustomerController {
    
    @Autowired
    private CustomerService customerService;

    @PostMapping("/createCustomer")
    public String createCustomer(@RequestBody String entity) {
        return this.customerService.createCustomer(entity);
    }

    @GetMapping("/readCustomer")
    public String readCustomer(@RequestParam String param) {
        return this.customerService.readCustomer(param);
    }
    
    
    @GetMapping("/updateCustomer")
    public String updateCustomer(@RequestParam String param) {
        return this.customerService.updateCustomer(param);
    }
    

    @GetMapping("/deleteCustomer")
    public String deleteCustomer(@RequestParam String param) {
        return this.customerService.deleteCustomer(param);  
    }
    
}
