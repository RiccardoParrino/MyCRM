package parrino.riccardo.mycrm.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class SaleDTO {
    private Long saleId;
    private Date createdAt;
    private String username;
    private Long customerId;
    private Long productId;
    private String progress;
    private String activity;
    private String amount;
    private Date lastUpdate;
    private String notes;
}
