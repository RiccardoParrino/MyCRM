package parrino.riccardo.mycrm.service;

import java.util.Optional;

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

    public Boolean createUser(UserDTO userDTO) {
        return userService.createUser(
            User
                .builder()
                .username(userDTO.getUsername())
                .password(userDTO.getPassword())
                .name(userDTO.getName())
                .surname(userDTO.getSurname())
                .email(userDTO.getEmail())
                .phoneNumber(userDTO.getPhoneNumber())
                .organizationName(userDTO.getOrganizationName())
                .customers(null)
                .produce(null)
                .build()
        );
    }

    public Boolean directLogin(LoginDTO loginDTO) {
        Optional<User> user = this.userService.findUserByUsername(loginDTO.getUsername());
        return user.isPresent() ? loginDTO.getPassword().equals(user.get().getPassword()) : false;
    }

    public Boolean resetPassword(String username, String password) {
        Optional<User> user = this.userService.findUserByUsernameAndPassword(username, password);

        if (user.isEmpty())
            return false;

        String temporaryPassword = new String("123456789");

        this.mailSenderService.sendEmail( 
            user.get().getEmail(),
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
