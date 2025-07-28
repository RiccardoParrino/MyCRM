package parrino.riccardo.mycrm.rest;

import org.springframework.web.bind.annotation.RestController;

import parrino.riccardo.mycrm.dto.CustomerDTO;
import parrino.riccardo.mycrm.service.CustomerService;

import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class CustomerController {
    
    @Autowired
    private CustomerService customerService;

    @PostMapping("/createCustomer")
    public String createCustomer() {
        String entity = new String ("temp");
        return this.customerService.createCustomer(entity);
    }

    @GetMapping("/readCustomer")
    public List<CustomerDTO> readCustomer() {
        List<CustomerDTO> toReturn = new ArrayList<>();
        CustomerDTO c1 = 
            CustomerDTO.builder()
                .name("riccardo")
                .surname("parrino")
                .email("riccardo@gmail.com")
                .organization("BIG COMPANY LTD")
                .phoneNumber("1231231231")
                .notes("GRAAANDEEE")
                .createdAt(new Date())
                .build();
        
        CustomerDTO c2 = 
            CustomerDTO.builder()
                .name("riccardo")
                .surname("parrino")
                .email("riccardo@gmail.com")
                .organization("BIG COMPANY LTD")
                .phoneNumber("1231231231")
                .notes("GRAAANDEEE")
                .createdAt(new Date())
                .build();
        
        CustomerDTO c3 = 
            CustomerDTO.builder()
                .name("riccardo")
                .surname("parrino")
                .email("riccardo@gmail.com")
                .organization("BIG COMPANY LTD")
                .phoneNumber("1231231231")
                .notes("GRAAANDEEE")
                .createdAt(new Date())
                .build();
        
        toReturn.add(c1);
        toReturn.add(c2);
        toReturn.add(c3);

        return toReturn;
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
