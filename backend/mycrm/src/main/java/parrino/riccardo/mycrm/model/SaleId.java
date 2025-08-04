package parrino.riccardo.mycrm.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import jakarta.persistence.Embeddable;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@Embeddable
public class SaleId implements Serializable{
    
    private Long saleId;
    private Long userId;
    private Long customerId;
    private Long productId;
    private Date createdAt;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        else if (!(o instanceof SaleId))
            return false;
        SaleId otherSale = (SaleId) o;
        return this.getSaleId().equals(otherSale.getSaleId()) &&
               this.getUserId().equals(otherSale.getUserId()) &&
               this.getCustomerId().equals(otherSale.getCustomerId()) &&
               this.getProductId().equals(otherSale.getProductId()) &&
               this.getCreatedAt().equals(otherSale.getCreatedAt());
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.saleId, this.userId, this.customerId, this.productId, this.createdAt);
    }

}
