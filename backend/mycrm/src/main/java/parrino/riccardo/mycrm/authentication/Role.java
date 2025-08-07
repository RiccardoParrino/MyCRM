package parrino.riccardo.mycrm.authentication;

import org.springframework.security.core.GrantedAuthority;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Role implements GrantedAuthority {

    @Id
    private String id;

    @Override
    public String getAuthority() {
        return this.id;
    }
    
}
