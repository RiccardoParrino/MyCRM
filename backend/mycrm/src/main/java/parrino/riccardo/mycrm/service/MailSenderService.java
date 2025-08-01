package parrino.riccardo.mycrm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailSenderService {
    
    @Autowired
    private JavaMailSender javaMailSender;

    public Boolean sendEmail (String toEmail, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(toEmail);
        message.setSubject(subject);
        message.setText(body);

        javaMailSender.send(message);
        
        return true;
    }

}
