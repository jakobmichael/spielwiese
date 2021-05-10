package com.example.springsecuritydemo.auth;

import static com.example.springsecuritydemo.security.ApplicationUserRole.ADMIN;
import static com.example.springsecuritydemo.security.ApplicationUserRole.ADMINTRAINEE;
import static com.example.springsecuritydemo.security.ApplicationUserRole.STUDENT;

import java.util.List;
import java.util.Optional;

import com.google.common.collect.Lists;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

@Repository("fakeRepository")
public class FakeApplicationUserDaoService implements ApplicationUserDAO {

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public FakeApplicationUserDaoService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Optional<ApplicationUser> selectApplicationUserByUsername(String username) {
        return getApplicationUsers().stream().filter(applicationUser -> username.equals(applicationUser.getUsername()))
                .findFirst();
    }

    private List<ApplicationUser> getApplicationUsers() {
        List<ApplicationUser> applicationUsers = Lists.newArrayList(
                new ApplicationUser("jakobluge", passwordEncoder.encode("password"), ADMIN.getGrantedAuthorities(),
                        true, true, true, true),

                new ApplicationUser("mariastuart", passwordEncoder.encode("password"),
                        ADMINTRAINEE.getGrantedAuthorities(), true, true, true, true),

                new ApplicationUser("mickymaus", passwordEncoder.encode("password"), STUDENT.getGrantedAuthorities(),
                        true, true, true, true));

        return applicationUsers;
    }
}
