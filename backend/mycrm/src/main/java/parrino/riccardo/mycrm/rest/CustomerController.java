package parrino.riccardo.mycrm.rest;

import org.springframework.web.bind.annotation.RestController;

import parrino.riccardo.mycrm.dto.CustomerDTO;
import parrino.riccardo.mycrm.service.CustomerService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class CustomerController {
    
    @Autowired
    private CustomerService customerService;

    @PostMapping("/createCustomer")
    public Boolean createCustomer(@RequestBody CustomerDTO customerDTO) {
        return this.customerService.createCustomer(customerDTO);
    }

    @GetMapping("/readCustomer")
    public List<CustomerDTO> readCustomers() {
        return this.customerService
            .readCustomers()
            .stream()
            .map(customer -> 
                CustomerDTO.builder()
                    .customerId(customer.getCustomerId())
                    .name(customer.getName())
                    .surname(customer.getSurname())
                    .email(customer.getEmail())
                    .phoneNumber(customer.getPhoneNumber())
                    .organizationName(customer.getOrganizationName())
                    .city(customer.getCity())
                    .region(customer.getRegion())
                    .state(customer.getState())
                    .coreBusiness(customer.getCoreBusiness())
                    .createdAt(customer.getCreatedAt())
                    .notes(customer.getNotes())
                    .build()
        ).toList();
    }
    
    @PostMapping("/updateCustomer")
    public Boolean updateCustomer(@RequestBody CustomerDTO customerDTO) {
        return this.customerService.updateCustomer(customerDTO.getName());
    }

    @GetMapping("/deleteCustomer")
    public Boolean deleteCustomer(@RequestParam Long customerId) {
        return this.customerService.deleteCustomer(customerId);
    }
    
}
