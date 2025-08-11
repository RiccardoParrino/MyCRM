package parrino.riccardo.mycrm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import parrino.riccardo.mycrm.dto.UpdateUserDTO;
import parrino.riccardo.mycrm.dto.UserDetailsDTO;
import parrino.riccardo.mycrm.model.User;
import parrino.riccardo.mycrm.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    
    public User getUserDetails(UserDetailsDTO userDetailsDTO){
        Optional<User> user = userRepository.findByUsername(userDetailsDTO.getUsername());
        if (user.isPresent())
            return user.get();
        else
            return null;
    }

    public Optional<User> findUserByUsername(String username) {
        return this.userRepository.findByUsername(username);
    }

    public Boolean saveUser(User user) {
        return this.createUser(user);
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

    public Boolean updateUserDetails(UpdateUserDTO updateUserDTO) {
        return userRepository.updateUserDetails(
            updateUserDTO.getUsername(),
            updateUserDTO.getName(),
            updateUserDTO.getSurname(),
            updateUserDTO.getEmail(),
            updateUserDTO.getPhoneNumber(),
            updateUserDTO.getOrganizationName()
        ) > 0;
    }

}
