package parrino.riccardo.mycrm.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class CustomerDTO {
    private String name;
    private String surname;
    private String email;
    private String phoneNumber;
    private String organizationName;
    private String city;
    private String region;
    private String state;
    private String coreBusiness;
    private Date createdAt;
    private String notes;
}
