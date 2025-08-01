package parrino.riccardo.mycrm.rest;

import org.springframework.web.bind.annotation.RestController;

import parrino.riccardo.mycrm.dto.LoginDTO;
import parrino.riccardo.mycrm.dto.UserDTO;
import parrino.riccardo.mycrm.service.AuthenticationService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;
    
    @PostMapping("registration")
    public Boolean createUser(@RequestBody UserDTO user) {
        return this.authenticationService.createUser(user);
    }

    @PostMapping("login")
    public Boolean readUser(@RequestBody LoginDTO loginDTO) {
        return this.authenticationService.readUser(loginDTO);
    }
    
    @PostMapping("updateUser")
    public Boolean updateUser(@RequestBody String entity) {
        return true;
    }
    
    @GetMapping("deleteUser")
    public Boolean deleteUser(@RequestParam String param) {
        return true;
    }
    
}
