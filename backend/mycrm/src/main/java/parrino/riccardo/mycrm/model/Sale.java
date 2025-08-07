package parrino.riccardo.mycrm.model;

import java.util.Date;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "sale")
public class Sale {

    @EmbeddedId
    private SaleId saleId;

    @ManyToOne
    @MapsId("username")
    private User user;

    @ManyToOne
    @MapsId("customerId")
    private Customer customer;

    @ManyToOne
    @MapsId("productId")
    private Product product;

    private String progress;
    private String activity;
    private String amount;
    private Date lastUpdate;
    private String notes;
}
