package parrino.riccardo.mycrm.rest;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import parrino.riccardo.mycrm.dto.SaleDTO;
import parrino.riccardo.mycrm.model.Sale;
import parrino.riccardo.mycrm.model.SaleId;
import parrino.riccardo.mycrm.service.SaleService;

@RestController
@RequestMapping("sale")
public class SaleController {

    @Autowired
    private SaleService saleService;
    
    @PostMapping("create")
    public Boolean createSale(@RequestBody SaleDTO saleDTO) {
        return saleService.createSale(saleDTO);
    }

    @GetMapping("read")
    public SaleDTO readSale(@RequestParam SaleId param) {
        Optional<Sale> optionalSale = saleService.readSale(param);
        if (optionalSale.isPresent()) {
            Sale sale = optionalSale.get();
            SaleDTO saleDTO = SaleDTO.builder()
                .user(sale.getUser())
                .customer(sale.getCustomer())
                .product(sale.getProduct())
                .progress(sale.getProgress())
                .activity(sale.getActivity())
                .amount(sale.getAmount())
                .lastUpdate(sale.getLastUpdate())
                .notes(sale.getNotes())
                .build();
            return saleDTO;
        }
        return null;
    }
    
    @GetMapping("update")
    public Boolean updateSale(@RequestParam SaleDTO saleDTO) {
        return saleService.updateSale(saleDTO);
    }
    
    @GetMapping("delete")
    public Boolean deleteSaleById(@RequestParam SaleId saleId) {
        return saleService.deleteSale(saleId);
    }

}
