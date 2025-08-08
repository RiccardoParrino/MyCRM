package parrino.riccardo.mycrm.rest;

import java.util.List;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.Operation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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
    
    @PostMapping(value = "create", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public Boolean createSale(@RequestBody SaleDTO saleDTO) {
        return saleService.createSale(saleDTO);
    }

    @GetMapping(value = "read", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public List<SaleDTO> readSale() {
        List<Sale> sales = saleService.readSale();
        return sales
            .stream()
            .map(sale -> 
                SaleDTO.builder()
                    .saleId(sale.getSaleId().getSaleId())
                    .createdAt(sale.getSaleId().getCreatedAt())
                    .username(sale.getSaleId().getUsername())
                    .customerId(sale.getSaleId().getCustomerId())
                    .productId(sale.getSaleId().getProductId())
                    .progress(sale.getProgress())
                    .activity(sale.getActivity())
                    .amount(sale.getAmount())
                    .lastUpdate(sale.getLastUpdate())
                    .notes(sale.getNotes())
                .build()
            ).toList();
    }
    
    @PostMapping(value = "update", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public Boolean updateSale(@RequestBody SaleDTO saleDTO) {
        return saleService.updateSale(saleDTO);
    }
    
    @PostMapping(value = "delete", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public Boolean deleteSaleBySaleId(@RequestBody SaleId saleId) {
        saleService.deleteSale(saleId);
        return true;
    }

}
