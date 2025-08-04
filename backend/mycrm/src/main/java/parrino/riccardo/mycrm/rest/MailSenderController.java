package parrino.riccardo.mycrm.rest;

import org.springframework.web.bind.annotation.RestController;

import parrino.riccardo.mycrm.dto.EmailDTO;
import parrino.riccardo.mycrm.service.MailSenderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("email")
public class MailSenderController {

    @Autowired
    private MailSenderService mailSenderService;

    @PostMapping("send")
    public boolean sendEmail(@RequestBody EmailDTO emailDto) {
        return this.mailSenderService
            .sendEmail(
                emailDto.getToEmail(), 
                emailDto.getSubject(), 
                emailDto.getBody()
            );
    }
    

}
