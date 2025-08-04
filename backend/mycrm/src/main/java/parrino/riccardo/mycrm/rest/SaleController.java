package parrino.riccardo.mycrm.rest;

import java.util.List;
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
    public List<SaleDTO> readSale() {
        return null;
    }
    
    @PostMapping("update")
    public Boolean updateSale(@RequestBody SaleDTO saleDTO) {
        return saleService.updateSale(saleDTO);
    }
    
    @GetMapping("delete")
    public Boolean deleteSaleById(@RequestParam SaleId saleId) {
        return saleService.deleteSale(saleId);
    }

}
