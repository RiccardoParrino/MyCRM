package parrino.riccardo.mycrm.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.dto.SaleDTO;
import parrino.riccardo.mycrm.model.Sale;
import parrino.riccardo.mycrm.model.SaleId;
import parrino.riccardo.mycrm.repository.SaleRepository;

@Service
public class SaleService {
    
    @Autowired
    private SaleRepository saleRepository;

    public Boolean createSale(SaleDTO saleDTO) {
        Sale sale = Sale.builder()
            .saleId(saleDTO.getSaleId())
            .user(saleDTO.getUser())
            .customer(saleDTO.getCustomer())
            .product(saleDTO.getProduct())
            .progress(saleDTO.getProgress())
            .activity(saleDTO.getActivity())
            .amount(saleDTO.getAmount())
            .lastUpdate(saleDTO.getLastUpdate())
            .notes(saleDTO.getNotes())
            .build();
        saleRepository.save(sale);
        return true;
    }

    public Optional<Sale> readSale(SaleId saleId) {
        return saleRepository.findById(saleId);
    }
    
    public Boolean updateSale(SaleDTO saleDTO) {
        if (saleRepository.existsById(saleDTO.getSaleId())) {
            return this.createSale(saleDTO);
        }
        return false;
    }
    
    public Boolean deleteSale(SaleId saleId) {
        saleRepository.deleteById(saleId);
        return true;
    }

}
