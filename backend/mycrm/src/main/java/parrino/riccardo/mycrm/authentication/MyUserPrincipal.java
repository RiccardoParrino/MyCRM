package parrino.riccardo.mycrm.authentication;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import parrino.riccardo.mycrm.model.User;

public class MyUserPrincipal implements UserDetails {

    private User user;

    public MyUserPrincipal(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.user.getRoles();
    }

    @Override
    public String getPassword() {
       return this.user.getPassword();
    }

    @Override
    public String getUsername() {
       return this.user.getUsername();
    }
    
}
