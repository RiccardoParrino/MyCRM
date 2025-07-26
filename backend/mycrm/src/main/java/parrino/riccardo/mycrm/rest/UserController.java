package parrino.riccardo.mycrm.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import parrino.riccardo.mycrm.service.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService userService;
    
    @PostMapping("/createUser")
    public String createUser(@RequestBody String entity) {
        return userService.createUser(entity);
    }

    @GetMapping("/readUser")
    public String readUser(@RequestParam String param) {
        return userService.readUser(param);
    }
    
    @GetMapping("/updateUser")
    public String updateUser(@RequestParam String param) {
        return userService.updateUser(param);
    }

    @GetMapping("/deleteUser")
    public String deleteUser(@RequestParam String param) {
        return userService.deleteUser(param);
    }

}
