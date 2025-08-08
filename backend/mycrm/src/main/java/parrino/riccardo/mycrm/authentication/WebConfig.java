package parrino.riccardo.mycrm.authentication;

import java.util.ArrayList;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
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
                .requestMatchers("/auth/login").permitAll()
                .requestMatchers("/auth/registration").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(form -> form.disable())
            .httpBasic(httpBasic -> httpBasic.disable())
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authenticationManager(authenticationManager())
            .addFilterBefore(jwtAuthFilter(), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public JwtAuthenticationFilter jwtAuthFilter() {
        return new JwtAuthenticationFilter();
    }

    @Bean
    public AuthenticationManager authenticationManager() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(myDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());

        ProviderManager providerManager = new ProviderManager(authenticationProvider);
        providerManager.setEraseCredentialsAfterAuthentication(false);

        return providerManager;
    }

    @Bean
    public UserDetailsService myDetailsService() {
        return new MyUserDetailsService();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsManager jdbcUserDetailsManager (DataSource dataSource, PasswordEncoder passwordEncoder) {

        JdbcUserDetailsManager jdbcUserDetailsManager = new JdbcUserDetailsManager(dataSource);

        jdbcUserDetailsManager.setUserExistsSql("SELECT 1 FROM MYCRM.USERS WHERE USERNAME = ?");

        jdbcUserDetailsManager.setCreateUserSql("INSERT INTO MYCRM.USERS (USERNAME, PASSWORD, ENABLED) VALUES (?, ?, ?)");

        jdbcUserDetailsManager.setCreateAuthoritySql("INSERT INTO MYCRM.USERS_ROLES (USER_USERNAME, ROLES_AUTHORITY) VALUES (?, ?)");

        jdbcUserDetailsManager.setUsersByUsernameQuery("SELECT USERNAME, PASSWORD, ENABLED FROM MYCRM.USERS WHERE USERNAME = ?");
        jdbcUserDetailsManager.setAuthoritiesByUsernameQuery("SELECT USER_USERNAME as USERNAME, ROLES_AUTHORITY FROM MYCRM.USERS_ROLES WHERE USER_USERNAME = ?");

        Authorities userRole = Authorities.builder()
            .authority("USER")
            .build();

        Authorities adminRole = Authorities.builder()
            .authority("ADMIN")
            .build();

        User user = User.builder()
            .username("ric")
            .password(passwordEncoder().encode("mycrm"))
            .build();
        
        user.getRoles().add(userRole);

        jdbcUserDetailsManager.createUser(
            new MyUserPrincipal(
                user
        ));
        return jdbcUserDetailsManager;
    }

}
