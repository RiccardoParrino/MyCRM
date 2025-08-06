package parrino.riccardo.mycrm.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import jakarta.transaction.Transactional;
import parrino.riccardo.mycrm.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByUsername(String string);

    Optional<User> findByUsernameAndPassword(String username, String password);

    @Transactional
    @Modifying
    @Query("UPDATE User u SET u.password = :newPassword WHERE u.username = :username AND u.password = :oldPassword")
    Integer updatePasswordByUsernameAndPassword(
        @Param("username") String username, 
        @Param("oldPassword") String oldPassword, 
        @Param("newPassword") String newPassword
    );

    @Transactional
    @Modifying
    @Query("UPDATE User u SET u.name = :name, u.surname = :surname, u.email = :email, u.phoneNumber = :phoneNumber, u.organizationName = :organizationName WHERE u.username = :username AND u.password = :password")
    int updateUserDetails(
        @Param("username") String username,
        @Param("password") String password,
        @Param("name") String name,
        @Param("surname") String surname,
        @Param("email") String email,
        @Param("phoneNumber") String phoneNumber,
        @Param("organizationName") String organizationName
    );
}
