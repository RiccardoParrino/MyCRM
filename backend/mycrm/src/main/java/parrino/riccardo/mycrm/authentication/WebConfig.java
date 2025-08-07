package parrino.riccardo.mycrm.authentication;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import parrino.riccardo.mycrm.model.User;

@Configuration
@EnableWebSecurity
public class WebConfig {

    @Bean
    WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:4200")
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowedHeaders("*");
            }
        };
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors(Customizer.withDefaults())
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests((requests) -> requests
                .requestMatchers("auth/login", "auth/registration").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(form -> form.disable())
            .httpBasic(httpBasic -> httpBasic.disable());

        return http.build();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public UserDetailsManager jdbcUserDetailsManager (DataSource dataSource, PasswordEncoder passwordEncoder) {

        JdbcUserDetailsManager jdbcUserDetailsManager = new JdbcUserDetailsManager(dataSource);

        jdbcUserDetailsManager.setUserExistsSql("SELECT 1 FROM MYCRM.USERS WHERE USERNAME = ?");

        jdbcUserDetailsManager.setCreateUserSql("INSERT INTO MYCRM.USERS (USERNAME, PASSWORD, ENABLED) VALUES (?, ?, ?)");

        jdbcUserDetailsManager.setCreateAuthoritySql("INSERT INTO MYCRM.AUTHORITIES (USERNAME, AUTHORITY) VALUES (?, ?)");

        jdbcUserDetailsManager.setUsersByUsernameQuery("SELECT USERNAME, PASSWORD, ENABLED FROM MYCRM.USERS WHERE USERNAME = ?");
        jdbcUserDetailsManager.setAuthoritiesByUsernameQuery("SELECT USERNAME, AUTHORITY FROM MYCRM.AUTHORITIES WHERE USERNAME = ?");

        jdbcUserDetailsManager.createUser(new MyUserPrincipal(
            User.builder()
            .username("ric")
            .password(passwordEncoder().encode("mycrm"))
            .enabled(true)
            .build()
        ));
        return jdbcUserDetailsManager;
    }

}
