package com.pdksbackend.pdks.services;

import com.pdksbackend.pdks.model.User;
import com.pdksbackend.pdks.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User getByPhone(String phone) {
        return userRepository.findByPhone(phone);
    }

    public User getByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User getById(String id) {
        return userRepository.findById(id).orElse(null);
    }

    public void delete(User user) {
        userRepository.delete(user);
    }

    @Bean
    public BCryptPasswordEncoder encodePassword() {
        return new BCryptPasswordEncoder();
    }

}
