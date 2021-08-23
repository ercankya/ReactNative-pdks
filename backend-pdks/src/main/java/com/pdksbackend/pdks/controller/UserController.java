package com.pdksbackend.pdks.controller;

import com.pdksbackend.pdks.model.User;
import com.pdksbackend.pdks.services.CompanyService;
import com.pdksbackend.pdks.services.RoleService;
import com.pdksbackend.pdks.services.UserService;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    RoleService roleService;

    @Autowired
    CompanyService companyService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping(value = "/getAll")
    public List<User> getUsers() {
        return userService.findAll();
    }

    @PostMapping(value = "/signUp")
    public Object signUp(@Validated @RequestBody User user) {
        String phone = user.getPhone();
        String password = bCryptPasswordEncoder.encode(user.getPassword());
        User existUser = userService.getByPhone(phone);
        if (existUser == null) {
            user.setRole("USER");
            user.setPassword(password);
            user.setAccess(false);
            userService.save(user);
            return (user);
        } else {
            return "hata";
        }
    }

    @PostMapping(value = "/signIn")
    public Object signIn(@Validated @RequestBody User user) {
        User existUser = userService.getByPhone(user.getPhone());
        System.out.println(existUser);
        if (existUser == null) {
            return "kullanıcı yok.";
        } else {
            if (bCryptPasswordEncoder.matches(user.getPassword(), existUser.getPassword())) {
                if (existUser.getAccess() == true) {
                    existUser.setToken(RandomStringUtils.randomAlphabetic(10));
                    userService.save(existUser);
                    return (existUser);
                } else {
                    return "not confirm";
                }
            } else {
                return "hata";
            }
        }
    }

    @PostMapping(value = "/signOut")
    public Object signOut(@Validated @RequestBody User user) {
        User existUser = userService.getByPhone(user.getPhone());
        if (existUser == null) {
            return "kullanıcı yok.";
        } else {
            existUser.setToken(null);
            userService.save(existUser);
            return (existUser);
        }
    }

    @PostMapping(value = "/confirmUser")
    public Object confirm(@Validated @RequestBody User user) {
        User existUser2 = userService.getByPhone(user.getPhone());
        User existUser = userService.getByUsername(user.getUsername());

        if (existUser == null) {
            return "yok.";
        } else {
            if (existUser.getAccess() == false) {
                existUser.setAccess(true);
                userService.save(existUser);
                return (existUser);
            } else {
                existUser.setAccess(false);
                userService.save(existUser);
                return (existUser);
            }
        }
    }
}

