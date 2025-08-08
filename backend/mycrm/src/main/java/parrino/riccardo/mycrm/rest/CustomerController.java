package parrino.riccardo.mycrm.rest;

import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import parrino.riccardo.mycrm.dto.CustomerDTO;
import parrino.riccardo.mycrm.service.CustomerService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;

@RestController
@RequestMapping("customer")
public class CustomerController {
    
    @Autowired
    private CustomerService customerService;

    @PostMapping(value = "create", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public Boolean createCustomer(@RequestBody CustomerDTO customerDTO) {
        return this.customerService.createCustomer(customerDTO);
    }

    @GetMapping(value = "read", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
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
    
    @PostMapping(value = "update", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public Boolean updateCustomer(@RequestBody CustomerDTO customerDTO) {
        return this.customerService.updateCustomer(customerDTO);
    }

    @GetMapping(value = "delete", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public Boolean deleteCustomer(@RequestParam Long customerId) {
        return this.customerService.deleteCustomer(customerId);
    }
    
}
