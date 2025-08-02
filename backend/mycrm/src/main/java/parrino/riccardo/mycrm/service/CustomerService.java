package parrino.riccardo.mycrm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.dto.CustomerDTO;
import parrino.riccardo.mycrm.model.Customer;
import parrino.riccardo.mycrm.repository.CustomerRepository;

@Service
public class CustomerService {
    
    @Autowired
    private CustomerRepository customerRepository;

    public Boolean createCustomer(CustomerDTO customerDTO) {
        Customer customer = Customer
            .builder()
            .name(customerDTO.getName())
            .surname(customerDTO.getSurname())
            .email(customerDTO.getEmail())
            .phoneNumber(customerDTO.getPhoneNumber())
            .organizationName(customerDTO.getOrganizationName())
            .city(customerDTO.getCity())
            .region(customerDTO.getRegion())
            .state(customerDTO.getState())
            .coreBusiness(customerDTO.getCoreBusiness())
            .createdAt(customerDTO.getCreatedAt())
            .notes(customerDTO.getNotes())
            .build();
        this.customerRepository.save(customer);
        return true;
    }

    public List<Customer> readCustomers() {
        return this.customerRepository.findAll();
    }
    
    public Boolean updateCustomer(String param) {
        return true;
    }
    
    public Boolean deleteCustomer(Long customerId) {
        System.out.println(customerId);
        return true;
    }

}
