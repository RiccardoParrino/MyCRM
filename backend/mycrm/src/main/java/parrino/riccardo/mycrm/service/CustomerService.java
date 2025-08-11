package parrino.riccardo.mycrm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.dto.CustomerDTO;
import parrino.riccardo.mycrm.model.Customer;
import parrino.riccardo.mycrm.model.User;
import parrino.riccardo.mycrm.repository.CustomerRepository;

@Service
public class CustomerService {
    
    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private UserService userService;

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

        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        Optional<User> user = userService.findUserByUsername(username);

        if (user.isPresent()) {
            user.get().getCustomers().add(customer);
            userService.saveUser(user.get());
        }

        return true;
    }

    public List<Customer> readCustomers() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        Optional<User> user = userService.findUserByUsername(username);

        if (user.isPresent()) {
            return user.get().getCustomers();
        }
        return null;
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

            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            Optional<User> user = userService.findUserByUsername(username);

            if (user.isPresent()) {
                user.get().getCustomers().remove(customer);
                user.get().getCustomers().add(customer);
                userService.saveUser(user.get());
            }

            return true;
        } else {
            System.out.println("Customer not found with id: " + customerDTO.getCustomerId());
            return false;
        }
    }
    
    public Boolean deleteCustomer(Long customerId) {
        try {

            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            Optional<User> user = userService.findUserByUsername(username);

            if (user.isPresent()) {
                user.get().getCustomers()
                    .remove(
                        Customer.builder()
                            .customerId(customerId)
                        .build()
                );
                userService.saveUser(user.get());
            }

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
