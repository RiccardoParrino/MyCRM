package parrino.riccardo.mycrm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.OptimisticLockingFailureException;
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
    
    public Boolean updateCustomer(CustomerDTO customerDTO) {
        if (customerRepository.existsById(customerDTO.getCustomerId())) {
            Customer customer = Customer.builder()
                .customerId(customerDTO.getCustomerId())
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
            customerRepository.save(customer);
            return true;
        } else {
            System.out.println("Customer not found with id: " + customerDTO.getCustomerId());
            return false;
        }
    }
    
    public Boolean deleteCustomer(Long customerId) {
        try {
            this.customerRepository.deleteById(customerId);
            return true;
        } catch (IllegalArgumentException ex) {
            System.out.println(ex);
            return false;
        } catch (OptimisticLockingFailureException ex){
            System.out.println("User doesn't exist!");
            return false;
        }
    }

}
