package in.amitPandey.billingsoftware.service.impl;

import java.util.Collections;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import in.amitPandey.billingsoftware.entity.UserEntity;
// import in.amitPandey.billingsoftware.io.UserResponse;
import in.amitPandey.billingsoftware.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AppUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity existingUser = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Email not found for the email: "+email));

        return new User(existingUser.getEmail(), existingUser.getPassword(), Collections.singleton(new SimpleGrantedAuthority(existingUser.getRole())));
    }

    // @Override
    // public User loadUserByUsername(String email) throws UsernameNotFoundException {
    //     UserEntity existingUser = userRepository.findByEmail(email)
    //             .orElseThrow(() -> new UsernameNotFoundException("Email not found for the email: "+email));
    //     return new User(existingUser.getEmail(), existingUser.getPassword(), Collections.singleton(new SimpleGrantedAuthority(existingUser.getRole())));
    // }


    // User can also be used as return type instead of UserDetails since it implements UserDetails
    // UserDetails is interface so cant be instantiated
}
