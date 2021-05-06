package com.example.springsecuritydemo.security;

import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public ApplicationSecurityConfig(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    // configures Authorization for be basic Auth, authorize each request with
    // user/pw in authorization header
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        // .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()).and()
        .csrf().disable()
        .authorizeRequests()
                // antMatchers allows to whitelist certain endpoints
                .antMatchers("/css/*", "/js/*").permitAll()
                .antMatchers("/api/**")
                .hasRole(ApplicationUserRole.STUDENT.name()).anyRequest().authenticated()
                .and()
                //.httpBasic(); BasicAuth -> authenticate each request
                .formLogin()
                .loginPage("/login").permitAll()
                .defaultSuccessUrl("/courses",true)
                .and()
                .rememberMe().tokenValiditySeconds((int) TimeUnit.DAYS.toSeconds(21))
                .key("shouldBeSetToSomethingSecure")
                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout", "GET")) //each GET Request to specified URL performs logout
                .clearAuthentication(true)
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID", "remember-me")
                .logoutSuccessUrl("/login");
    }

    @Override
    @Bean
    protected UserDetailsService userDetailsService() {
        UserDetails jakoblugeUser = User.builder().username("Jakob").password(passwordEncoder.encode("password"))
                .authorities(ApplicationUserRole.ADMIN.getGrantedAuthorities()).build();

        UserDetails mariaUser = User.builder().username("Maria").password(passwordEncoder.encode("password"))
                .authorities(ApplicationUserRole.STUDENT.getGrantedAuthorities()).build();

        UserDetails tomUser = User.builder().username("Tom").password(passwordEncoder.encode("password"))
                .authorities(ApplicationUserRole.ADMINTRAINEE.getGrantedAuthorities()).build();

        return new InMemoryUserDetailsManager(jakoblugeUser, mariaUser, tomUser

        );
    }
}
