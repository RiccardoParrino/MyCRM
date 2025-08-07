package parrino.riccardo.mycrm.authentication;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Role implements GrantedAuthority {

    @Id
    private String id;

    @ManyToMany
    private Collection<Operation> allowedOperations;

    @Override
    public String getAuthority() {
        return this.id;
    }
    
    public Collection<Operation> getAllowedOperations() {
        return this.allowedOperations;
    }
}
