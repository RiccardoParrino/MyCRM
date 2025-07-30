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
    
    public String updateCustomer(String param) {
        return param;
    }
    
    public Boolean deleteCustomer(String customerId) {
        return true;
    }

}
