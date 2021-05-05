package com.example.springsecuritydemo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

@Configuration
@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true) enables authorizations on Methods instead of antMatchers
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
        http.csrf().disable().authorizeRequests()
                // antMatchers allows to whitelist certain endpoints
                .antMatchers("/", "index", "/css/*", "/js/*").permitAll().antMatchers("/api/**")

                .hasRole(ApplicationUserRole.STUDENT.name()).antMatchers(HttpMethod.DELETE, "/management/api/**")
                .hasAuthority(ApplicationUserPermission.COURSE_WRITE.getPermission())
                .antMatchers(HttpMethod.POST, "/management/api/**")
                .hasAuthority(ApplicationUserPermission.COURSE_WRITE.getPermission())
                .antMatchers(HttpMethod.PUT, "/management/api/**")
                .hasAuthority(ApplicationUserPermission.COURSE_WRITE.getPermission())
                .antMatchers(HttpMethod.GET, "/management/api/**")
                .hasAnyRole(ApplicationUserRole.ADMIN.name(), ApplicationUserRole.ADMINTRAINEE.name()).anyRequest()
                .authenticated().and().httpBasic();
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
