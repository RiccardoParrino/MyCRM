package parrino.riccardo.mycrm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import parrino.riccardo.mycrm.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    
}
