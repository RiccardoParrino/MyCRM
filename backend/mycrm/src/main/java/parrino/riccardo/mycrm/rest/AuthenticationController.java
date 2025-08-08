package parrino.riccardo.mycrm.rest;

import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import parrino.riccardo.mycrm.dto.AuthResponse;
import parrino.riccardo.mycrm.dto.ChangePasswordDTO;
import parrino.riccardo.mycrm.dto.LoginDTO;
import parrino.riccardo.mycrm.dto.UserDTO;
import parrino.riccardo.mycrm.service.AuthenticationService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;

@RestController
@RequestMapping("auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;
    
    @PostMapping(value = "registration", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public Boolean createUser(@RequestBody UserDTO user) {
        return this.authenticationService.createUser(user);
    }

    @PostMapping(value = "login", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public ResponseEntity<AuthResponse> directLogin(@RequestBody LoginDTO loginDTO) {
        return this.authenticationService.directLogin(loginDTO);
    }

    @PostMapping(value = "updateUser", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public Boolean updateUser(@RequestBody String entity) {
        return true;
    }
    
    @PostMapping(value = "deleteUser", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public Boolean deleteUser(@RequestParam String param) {
        return true;
    }

    @PostMapping(value = "resetPassword", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public Boolean resetPassword(@RequestBody LoginDTO loginDTO) {
        return this.authenticationService.resetPassword(loginDTO.getUsername(),loginDTO.getPassword());
    }
    
    @PostMapping(value = "changePassword", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "token")})
    public Boolean changePassword(@RequestBody ChangePasswordDTO changePasswordDTO) {
        return authenticationService.changePassword(
            changePasswordDTO.getUsername(), 
            changePasswordDTO.getOldPassword(),
            changePasswordDTO.getNewPassword()
        );
    }
    
    
}
