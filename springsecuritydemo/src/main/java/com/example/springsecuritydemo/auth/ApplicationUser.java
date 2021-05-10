package com.example.springsecuritydemo.auth;

import java.util.Collection;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class ApplicationUser implements UserDetails {

    private final Set<? extends GrantedAuthority> grantedAuthoritites;
    private final String password;
    private final String userName;
    private final boolean isAccountNonLocked;
    private final boolean isAccountNonExpired;
    private final boolean isCredentialsNonExpired;
    private final boolean isEnabled;

    public ApplicationUser(String userName, String password, Set<? extends GrantedAuthority> grantedAuthoritites, 
            boolean isAccountNonLocked, boolean isAccountNonExpired, boolean isCredentialsNonExpired,
            boolean isEnabled) {
        this.grantedAuthoritites = grantedAuthoritites;
        this.password = password;
        this.userName = userName;
        this.isAccountNonLocked = isAccountNonLocked;
        this.isAccountNonExpired = isAccountNonExpired;
        this.isCredentialsNonExpired = isCredentialsNonExpired;
        this.isEnabled = isEnabled;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return grantedAuthoritites;
    };

    @Override
    public String getPassword() {
        return password;
    };

    public String getUsername() {
        return userName;
    };

    @Override
    public boolean isAccountNonExpired() {
        return isAccountNonExpired;
    };

    @Override
    public boolean isAccountNonLocked() {
        return isAccountNonLocked;
    };

    @Override
    public boolean isCredentialsNonExpired() {
        return isCredentialsNonExpired;
    };

    @Override
    public boolean isEnabled() {
        return isEnabled;

    };
}
