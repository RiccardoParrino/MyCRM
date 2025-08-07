package parrino.riccardo.mycrm.authentication;

import org.springframework.security.core.GrantedAuthority;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
class Operation implements GrantedAuthority {
    @Id
    private String id;

    @Override
    public String getAuthority() {
        return id;
    }
}