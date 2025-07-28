package parrino.riccardo.mycrm.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ProductDTO {
    private String name;
    private String description;
    private String unit;
    private String price;
    private Integer stock;
    private String notes;
}
