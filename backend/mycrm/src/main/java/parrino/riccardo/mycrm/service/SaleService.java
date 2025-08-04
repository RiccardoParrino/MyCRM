package parrino.riccardo.mycrm.service;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.dto.SaleDTO;
import parrino.riccardo.mycrm.model.Sale;
import parrino.riccardo.mycrm.model.SaleId;
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

    public SaleService(
        UserRepository userRepository,
        SaleRepository saleRepository,
        CustomerRepository customerRepository,
        ProductRepository productRepository
    ) {
        this.userRepository = userRepository;
        this.saleRepository = saleRepository;
        this.customerRepository = customerRepository;
        this.productRepository = productRepository;
    }


    public Boolean createSale(SaleDTO saleDTO) {
        try {
            if (
                userRepository.findById(saleDTO.getUserId()).isPresent() &&
                customerRepository.findById(saleDTO.getCustomerId()).isPresent() &&
                productRepository.findById(saleDTO.getProductId()).isPresent()
            ) {
                Sale sale = Sale.builder()
                    .saleId(
                        SaleId.builder()
                            .userId(saleDTO.getUserId())
                            .customerId(saleDTO.getCustomerId())
                            .productId(saleDTO.getProductId())
                            .createdAt(new Date())
                        .build()
                    )
                    .user(userRepository.findById(saleDTO.getUserId()).get())
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
        // if (saleRepository.existsById(saleDTO.getSaleId())) {
        //     return this.createSale(saleDTO);
        // }
        return false;
    }
    
    public Boolean deleteSale(SaleId saleId) {
        saleRepository.deleteById(saleId);
        return true;
    }

}
