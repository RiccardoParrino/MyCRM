package parrino.riccardo.mycrm.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
@Entity
@Table(name = "product")
public class Product {
    private String name;
    private String description;
    private String unit;
    private String price;
    private Integer stock;
    private String notes;
}
