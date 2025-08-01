package parrino.riccardo.mycrm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.dto.LoginDTO;
import parrino.riccardo.mycrm.dto.UserDTO;
import parrino.riccardo.mycrm.model.User;

@Service
public class AuthenticationService {
    
    @Autowired
    private MailSenderService mailSenderService;

    @Autowired
    private UserService userService;

    public Boolean createUser(UserDTO user) {
        return true;
    }

    public Boolean readUser(LoginDTO loginDTO) {
        if ( loginDTO.getUsername().equals("riccardo") &&
                loginDTO.getPassword().equals("mycrm") )
                return true;
        return false;
    }

    public Boolean resetPassword(String username) {
        User user = this.userService.findUserByUsername(username);
        String temporaryPassword = new String("123456789");

        this.mailSenderService.sendEmail( 
            user.getEmail(),
            "Reset Password MyCRM",
            "New password: " + temporaryPassword
        );

        this.userService.setPasswordToUser(username, temporaryPassword);
        return true;
    }

    public Boolean changePassword(String username, String newPassword) {
        return this.userService.setPasswordToUser(username, newPassword);
    }

}
