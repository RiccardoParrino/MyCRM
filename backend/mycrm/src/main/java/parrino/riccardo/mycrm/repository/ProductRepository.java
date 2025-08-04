package parrino.riccardo.mycrm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import parrino.riccardo.mycrm.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
