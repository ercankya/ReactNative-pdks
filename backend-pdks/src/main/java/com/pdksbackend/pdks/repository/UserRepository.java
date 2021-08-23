package com.pdksbackend.pdks.repository;

import com.pdksbackend.pdks.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User findByPhone(String phone);
    User findUserByUsername(String username);
}
