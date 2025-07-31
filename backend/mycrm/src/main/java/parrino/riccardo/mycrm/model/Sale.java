package parrino.riccardo.mycrm.model;

import java.util.Date;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "sale")
public class Sale {

    @EmbeddedId
    private SaleId saleId;

    @ManyToOne
    @MapsId("userId")
    private Long userId;

    @ManyToOne
    @MapsId("customerId")
    private Long customerId;

    @ManyToOne
    @MapsId("productId")
    private Long productId;

    private String progress;
    private String activity;
    private String amount;
    private Date lastUpdate;
    private String notes;
}
