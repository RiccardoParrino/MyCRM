package parrino.riccardo.mycrm.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class SaleDTO {
    private String name;
    private String progress;
    private String customer;
    private Float amount;
    private String product;
    private Date date;
    private Date createdAt;
}
