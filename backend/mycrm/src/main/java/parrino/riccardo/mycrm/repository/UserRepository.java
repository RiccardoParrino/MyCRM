package parrino.riccardo.mycrm.repository;

import org.springframework.stereotype.Repository;

import parrino.riccardo.mycrm.model.User;

@Repository
public class UserRepository {
    
    public User findUserByUsername (String username) {
        return User
            .builder()
            .email("riccardoparrino1@gmail.com")
            .customers(null)
            .name("riccardo")
            .surname("rossi")
            .password("mycrm")
            .phoneNumber("123412341")
            .produce(null)
            .username("ric")
            .userId(1l)
            .build();
    }

}
