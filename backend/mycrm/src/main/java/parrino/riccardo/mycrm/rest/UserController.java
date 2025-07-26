package parrino.riccardo.mycrm.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    
    @PostMapping("/createUser")
    public String createUser(@RequestBody String entity) {
        return entity;
    }

    @GetMapping("/readUser")
    public String readUser(@RequestParam String param) {
        return new String();
    }
    
    
    @GetMapping("/updateUser")
    public String updateUser(@RequestParam String param) {
        return new String();
    }
    

    @GetMapping("/deleteUser")
    public String deleteUser(@RequestParam String param) {
        return new String();
    }

}
