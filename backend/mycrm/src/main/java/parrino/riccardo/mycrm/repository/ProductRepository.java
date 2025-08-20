package parrino.riccardo.mycrm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import jakarta.transaction.Transactional;
import parrino.riccardo.mycrm.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Transactional
    @Query("SELECT p FROM Product p WHERE p.id = :id")
    public Product findbyId(@Param("id") Long id);

}
