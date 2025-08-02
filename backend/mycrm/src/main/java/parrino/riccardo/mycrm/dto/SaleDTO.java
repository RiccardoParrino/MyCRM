package parrino.riccardo.mycrm.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import parrino.riccardo.mycrm.model.Customer;
import parrino.riccardo.mycrm.model.Product;
import parrino.riccardo.mycrm.model.SaleId;
import parrino.riccardo.mycrm.model.User;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class SaleDTO {
    private SaleId saleId;
    private User user;
    private Customer customer;
    private Product product;
    private String progress;
    private String activity;
    private String amount;
    private Date lastUpdate;
    private String notes;
}
