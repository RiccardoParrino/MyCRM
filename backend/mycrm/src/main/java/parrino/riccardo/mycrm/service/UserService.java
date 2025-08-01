package parrino.riccardo.mycrm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.model.User;
import parrino.riccardo.mycrm.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    
    public User findUserByUsername(String username) {
        return this.userRepository.findUserByUsername("username");
    }

    public Boolean setPasswordToUser(String username, String password) {
        return true;
    }

}
