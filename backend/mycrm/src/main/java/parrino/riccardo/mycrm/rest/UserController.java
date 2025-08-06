package parrino.riccardo.mycrm.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import parrino.riccardo.mycrm.dto.LoginDTO;
import parrino.riccardo.mycrm.dto.UpdateUserDTO;
import parrino.riccardo.mycrm.dto.UserDTO;
import parrino.riccardo.mycrm.model.User;
import parrino.riccardo.mycrm.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("user")
public class UserController {
    
    @Autowired
    private UserService userService;

    @PostMapping("updateUserDetails")
    public Boolean updateUserDetails(@RequestBody UpdateUserDTO updateUserDTO) {
        return userService.updateUserDetails(updateUserDTO);
    }

    @PostMapping("userDetails")
    public UserDTO getUserDetails(@RequestBody LoginDTO loginDTO) {
        User user = userService.getUserDetails(loginDTO);
        if (user != null)
            return UserDTO.builder()
                    .username(user.getUsername())
                    .password(user.getPassword())
                    .name(user.getName())
                    .surname(user.getSurname())
                    .email(user.getEmail())
                    .phoneNumber(user.getPhoneNumber())
                    .organizationName(user.getOrganizationName())
                .build();
        else
            return null;
    }
    

    @GetMapping("getAllUser")
    public List<UserDTO> getAllUser() {
        List<User> usersList = this.userService.getAllUser();
        List<UserDTO> listToReturn = new ArrayList<>();
        usersList.forEach(
            (user) -> listToReturn.add( UserDTO
                .builder()
                .email(user.getEmail())
                .name(user.getName())
                .username(user.getUsername())
                .surname(user.getSurname())
                .organizationName(user.getOrganizationName())
                .phoneNumber(user.getPhoneNumber())
                .build())
        );
        return listToReturn;
    }
    

}
