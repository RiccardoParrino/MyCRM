package parrino.riccardo.mycrm.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import parrino.riccardo.mycrm.authentication.Role;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "users")
public class User {
    
    @Id
    private String username;

    private String password;
    private String name;
    private String surname;
    private String email;
    private String phoneNumber;
    private String organizationName;
    private Boolean enabled;
    
    @ManyToMany
    private List<Role> roles;

    @ManyToMany
    List<Customer> customers;

    @ManyToMany
    List<Product> produce;
}
