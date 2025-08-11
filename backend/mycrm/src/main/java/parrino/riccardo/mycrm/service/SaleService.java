package parrino.riccardo.mycrm.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.dto.SaleDTO;
import parrino.riccardo.mycrm.model.Customer;
import parrino.riccardo.mycrm.model.Product;
import parrino.riccardo.mycrm.model.Sale;
import parrino.riccardo.mycrm.model.SaleId;
import parrino.riccardo.mycrm.model.User;
import parrino.riccardo.mycrm.repository.CustomerRepository;
import parrino.riccardo.mycrm.repository.ProductRepository;
import parrino.riccardo.mycrm.repository.SaleRepository;
import parrino.riccardo.mycrm.repository.UserRepository;

@Service
public class SaleService {

    private final UserRepository userRepository;
    private final SaleRepository saleRepository;
    private final CustomerRepository customerRepository;
    private final ProductRepository productRepository;
    private final UserService userService;

    public SaleService(
        UserRepository userRepository,
        SaleRepository saleRepository,
        CustomerRepository customerRepository,
        ProductRepository productRepository,
        UserService userService
    ) {
        this.userRepository = userRepository;
        this.saleRepository = saleRepository;
        this.customerRepository = customerRepository;
        this.productRepository = productRepository;
        this.userService = userService;
    }


    public Boolean createSale(SaleDTO saleDTO) {
        try {
            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            Optional<User> user = userService.findUserByUsername(username);

            if (
                user.isPresent() &&
                user.get().getCustomers().indexOf(Customer.builder().customerId(saleDTO.getCustomerId()).build()) >= 0 &&
                user.get().getProduce().indexOf(Product.builder().productId(saleDTO.getProductId()).build()) >= 0
            ) {
                Sale sale = Sale.builder()
                    .saleId(
                        SaleId.builder()
                            .username(saleDTO.getUsername())
                            .customerId(saleDTO.getCustomerId())
                            .productId(saleDTO.getProductId())
                            .createdAt(new Date())
                        .build()
                    )
                    .user(user.get())
                    .customer(customerRepository.findById(saleDTO.getCustomerId()).get())
                    .product(productRepository.findById(saleDTO.getProductId()).get())
                    .progress(saleDTO.getProgress())
                    .activity(saleDTO.getActivity())
                    .amount(saleDTO.getAmount())
                    .lastUpdate(saleDTO.getLastUpdate())
                    .notes(saleDTO.getNotes())
                    .build();
                saleRepository.save(sale);
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }

    public List<Sale> readSale() {
        return saleRepository.findAll();
    }
    
    public Boolean updateSale(SaleDTO saleDTO) {
        if (saleRepository.existsById(SaleId.builder()
                            .saleId(saleDTO.getSaleId())
                            .username(saleDTO.getUsername())
                            .customerId(saleDTO.getCustomerId())
                            .productId(saleDTO.getProductId())
                            .createdAt(saleDTO.getCreatedAt())
                            .build())
        ) {
            Sale sale = Sale.builder()
                .saleId(
                    SaleId.builder()
                        .saleId(saleDTO.getSaleId())
                        .username(saleDTO.getUsername())
                        .customerId(saleDTO.getCustomerId())
                        .productId(saleDTO.getProductId())
                        .createdAt(new Date())
                    .build()
                )
                .user(userRepository.findById(saleDTO.getUsername()).get())
                .customer(customerRepository.findById(saleDTO.getCustomerId()).get())
                .product(productRepository.findById(saleDTO.getProductId()).get())
                .progress(saleDTO.getProgress())
                .activity(saleDTO.getActivity())
                .amount(saleDTO.getAmount())
                .lastUpdate(new Date())
                .notes(saleDTO.getNotes())
                .build();
            saleRepository.updateSale(
                sale.getCustomer().getCustomerId(),
                sale.getProduct().getProductId(),
                sale.getActivity(),
                sale.getProgress(),
                sale.getAmount(),
                sale.getLastUpdate(),
                sale.getNotes(),
                sale.getSaleId().getSaleId()
            );
            return true;
        }
        return false;
    }
    
    public Boolean deleteSale(SaleId saleId) {
        try {
            saleRepository.deleteById(saleId);
            return true;
        } catch(Exception e) {
            System.out.println(e);
            return false;
        }
    }

}
