package parrino.riccardo.mycrm.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import parrino.riccardo.mycrm.service.SaleService;

@RestController
public class SaleController {

    @Autowired
    private SaleService saleService;
    
    @PostMapping("/createSale")
    public String createSale(@RequestBody String entity) {
        return saleService.createSale(entity);
    }

    @GetMapping("/readSale")
    public String readSale(@RequestParam String param) {
        return saleService.readSale(param);
    }
    
    
    @GetMapping("/updateSale")
    public String updateSale(@RequestParam String param) {
        return saleService.updateSale(param);
    }
    

    @GetMapping("/deleteSale")
    public String deleteSale(@RequestParam String param) {
        return saleService.deleteSale(param);
    }

}
