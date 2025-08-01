package parrino.riccardo.mycrm.service;

import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.dto.LoginDTO;
import parrino.riccardo.mycrm.dto.UserDTO;

@Service
public class AuthenticationService {
    
    public Boolean createUser(UserDTO user) {
        return true;
    }

    public Boolean readUser(LoginDTO loginDTO) {
        if ( loginDTO.getUsername().equals("riccardo") &&
                loginDTO.getPassword().equals("mycrm") )
                return true;
        return false;
    }

}
