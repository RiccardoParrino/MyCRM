package parrino.riccardo.mycrm.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import parrino.riccardo.mycrm.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByUsername(String string);
}
