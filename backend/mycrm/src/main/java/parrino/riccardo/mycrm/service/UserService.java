package parrino.riccardo.mycrm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.dto.LoginDTO;
import parrino.riccardo.mycrm.model.User;
import parrino.riccardo.mycrm.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    
    public User getUserDetails(LoginDTO loginDTO){
        Optional<User> user = userRepository.findByUsernameAndPassword(loginDTO.getUsername(), loginDTO.getPassword());
        if (user.isPresent())
            return user.get();
        else
            return null;
    }

    public Optional<User> findUserByUsername(String username) {
        return this.userRepository.findByUsername(username);
    }

    public Optional<User> findUserByUsernameAndPassword(String username, String password) {
        return this.userRepository.findByUsernameAndPassword(username, password);
    }

    public Boolean createUser(User user) {
        try{
            userRepository.save(user);
            return true;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }

    public Boolean setPasswordToUser(String username, String oldPassword, String newPassword) {
        return userRepository.updatePasswordByUsernameAndPassword(username, oldPassword, newPassword) > 0;
    }

    public List<User> getAllUser() {
        return this.userRepository.findAll();
    }

}
