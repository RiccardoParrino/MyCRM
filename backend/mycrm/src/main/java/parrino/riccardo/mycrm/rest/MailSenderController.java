package parrino.riccardo.mycrm.rest;

import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import parrino.riccardo.mycrm.dto.EmailDTO;
import parrino.riccardo.mycrm.service.MailSenderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;


@RestController
@RequestMapping("email")
public class MailSenderController {

    @Autowired
    private MailSenderService mailSenderService;

    @PostMapping(value = "send", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Read all sales", security = {@SecurityRequirement(name = "mycrm-jwt-token")})
    public boolean sendEmail(@RequestBody EmailDTO emailDto) {
        return this.mailSenderService
            .sendEmail(
                emailDto.getToEmail(), 
                emailDto.getSubject(), 
                emailDto.getBody()
            );
    }
    

}
