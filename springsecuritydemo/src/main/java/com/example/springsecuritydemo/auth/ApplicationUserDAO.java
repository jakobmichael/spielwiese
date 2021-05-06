package com.example.springsecuritydemo.auth;

import java.util.Optional;

public interface ApplicationUserDAO {

    Optional<ApplicationUser> selectApplicationUserByUserName(String userName);
}
