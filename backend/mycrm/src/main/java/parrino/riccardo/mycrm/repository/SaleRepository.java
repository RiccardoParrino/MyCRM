package parrino.riccardo.mycrm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;
import parrino.riccardo.mycrm.model.Sale;
import parrino.riccardo.mycrm.model.SaleId;

public interface SaleRepository extends JpaRepository<Sale, SaleId> {
    
    @Transactional
    @Modifying
    @Query("UPDATE Sale s set s.activity = 'ciao' WHERE s.id.saleId = 3")
    int updateSale();

}
