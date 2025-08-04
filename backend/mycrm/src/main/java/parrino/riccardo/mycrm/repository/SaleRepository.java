package parrino.riccardo.mycrm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import parrino.riccardo.mycrm.model.Sale;
import parrino.riccardo.mycrm.model.SaleId;

public interface SaleRepository extends JpaRepository<Sale, SaleId> {
}
