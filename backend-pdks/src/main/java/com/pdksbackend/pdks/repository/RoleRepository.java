package com.pdksbackend.pdks.repository;

import com.pdksbackend.pdks.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.Set;

@Repository
public interface RoleRepository extends JpaRepository<Role, String> {

    @Query(value = "FROM Role r WHERE r.role = ?1")
    Set<Role> findByRole(String role);

}
