package parrino.riccardo.mycrm.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailDTO {
    private String toEmail;
    private String subject;
    private String body;
}
