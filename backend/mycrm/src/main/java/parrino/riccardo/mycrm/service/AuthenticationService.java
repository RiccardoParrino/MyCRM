package parrino.riccardo.mycrm.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.authentication.MyUserPrincipal;
import parrino.riccardo.mycrm.dto.AuthResponse;
import parrino.riccardo.mycrm.dto.LoginDTO;
import parrino.riccardo.mycrm.dto.UserDTO;
import parrino.riccardo.mycrm.model.User;

@Service
public class AuthenticationService {
    
    @Autowired
    private MailSenderService mailSenderService;

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserDetailsManager jdbcUserDetailsManager;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTService jwtService;

    public Boolean createUser(UserDTO userDTO) {
        if ( jdbcUserDetailsManager.userExists(userDTO.getUsername()) ) {
            System.out.println("Username already used!");
            return false;
        }

        jdbcUserDetailsManager.createUser( new MyUserPrincipal ( 
            User
                .builder()
                .username(userDTO.getUsername())
                .password(passwordEncoder.encode(userDTO.getPassword()))
                .name(userDTO.getName())
                .surname(userDTO.getSurname())
                .email(userDTO.getEmail())
                .phoneNumber(userDTO.getPhoneNumber())
                .organizationName(userDTO.getOrganizationName())
                .customers(null)
                .produce(null)
            .build() 
        ));
        return true;
    }

    public ResponseEntity<AuthResponse> directLogin(LoginDTO loginDTO) {
        Optional<User> user = this.userService.findUserByUsername(loginDTO.getUsername());
        
        if ( user.isEmpty() ) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new AuthResponse("user doesn't exists"));
        }

        try {
            Authentication authenticationRequest =
                UsernamePasswordAuthenticationToken.unauthenticated(loginDTO.getUsername(), loginDTO.getPassword());

            Authentication authenticationResponse = this.authenticationManager
                .authenticate(authenticationRequest);

            String token = jwtService.generateToken(loginDTO.getUsername());
            
            return ResponseEntity.ok(new AuthResponse(token));
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new AuthResponse("bad credentials"));
        }
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

        this.userService.setPasswordToUser(username, password, temporaryPassword);
        return true;
    }

    public Boolean changePassword(String username, String oldPassword, String newPassword) {
        return this.userService.setPasswordToUser(username, oldPassword, newPassword);
    }

}
