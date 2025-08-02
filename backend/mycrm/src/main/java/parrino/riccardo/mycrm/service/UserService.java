package parrino.riccardo.mycrm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.model.User;
import parrino.riccardo.mycrm.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    
    public Optional<User> findUserByUsername(String username) {
        return this.userRepository.findByUsername("username");
    }

    public Boolean setPasswordToUser(String username, String password) {
        return true;
    }

    public List<User> getAllUser() {
        return this.userRepository.findAll();
    }

}
