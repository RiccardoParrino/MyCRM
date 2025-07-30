package parrino.riccardo.mycrm.service;

import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.dto.CustomerDTO;

@Service
public class CustomerService {
    
    public Boolean createCustomer(CustomerDTO customerDTO) {
        System.out.println(customerDTO.getName());
        return true;
    }

    public String readCustomer(String param) {
        return param;
    }
    
    public Boolean updateCustomer(String param) {
        return true;
    }
    
    public Boolean deleteCustomer(Long customerId) {
        System.out.println(customerId);
        return true;
    }

}
