package parrino.riccardo.mycrm.rest;

import org.springframework.web.bind.annotation.RestController;

import parrino.riccardo.mycrm.dto.AuthResponse;
import parrino.riccardo.mycrm.dto.ChangePasswordDTO;
import parrino.riccardo.mycrm.dto.LoginDTO;
import parrino.riccardo.mycrm.dto.UserDTO;
import parrino.riccardo.mycrm.service.AuthenticationService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;
    
    @PostMapping("registration")
    public Boolean createUser(@RequestBody UserDTO user) {
        return this.authenticationService.createUser(user);
    }

    @PostMapping(
        value = "login",
        consumes = "application/json", 
        produces = "application/json"
    )
    public ResponseEntity<AuthResponse> directLogin(@RequestBody LoginDTO loginDTO) {
        return this.authenticationService.directLogin(loginDTO);
    }
    
    @PostMapping("updateUser")
    public Boolean updateUser(@RequestBody String entity) {
        return true;
    }
    
    @GetMapping("deleteUser")
    public Boolean deleteUser(@RequestParam String param) {
        return true;
    }

    @PostMapping("resetPassword")
    public Boolean resetPassword(@RequestBody LoginDTO loginDTO) {
        return this.authenticationService.resetPassword(loginDTO.getUsername(),loginDTO.getPassword());
    }

    @PostMapping("changePassword")
    public Boolean changePassword(@RequestBody ChangePasswordDTO changePasswordDTO) {
        return authenticationService.changePassword(
            changePasswordDTO.getUsername(), 
            changePasswordDTO.getOldPassword(),
            changePasswordDTO.getNewPassword()
        );
    }
    
    
}
