package parrino.riccardo.mycrm.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateUserDTO {
    private String username;
    private String password;
    private String name;
    private String surname;
    private String email;
    private String phoneNumber;
    private String organizationNumber;
}
