package parrino.riccardo.mycrm.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import jakarta.transaction.Transactional;
import parrino.riccardo.mycrm.model.Sale;
import parrino.riccardo.mycrm.model.SaleId;

public interface SaleRepository extends JpaRepository<Sale, SaleId> {
    
    @Transactional
    @Modifying
    @Query(
        "UPDATE Sale s " + 
        "set s.id.customerId = :customerId, " + 
        "s.id.productId = :productId, " +
        "s.activity = :activity, " +
        "s.progress = :progress, " + 
        "s.amount = :amount, " + 
        "s.lastUpdate = :lastUpdate, " +
        "s.notes = :notes " +
        "WHERE s.id.saleId = :saleId"
    )
    int updateSale(
        @Param("customerId") Long customerId,
        @Param("productId") Long productId,
        @Param("activity") String activity,
        @Param("progress") String progress,
        @Param("amount") String amount,
        @Param("lastUpdate") Date lastUpdate,
        @Param("notes") String notes,
        @Param("saleId") Long saleId
    );

}
