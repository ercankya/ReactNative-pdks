package com.pdksbackend.pdks.services;



import com.pdksbackend.pdks.model.Role;
import com.pdksbackend.pdks.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Set;

@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public Role save(Role role){
        return roleRepository.save(role);
    }

    //get all employees
    public List<Role> findAll(){
        return roleRepository.findAll();
    }

    //get an employee by id
    public Role getById(String id){
        return roleRepository.findById(id).orElse(null);
    }

    //delete an employee
    public void delete(Role role){
        roleRepository.delete(role);
    }

    //get a role with role name
    public Set<Role> getByRole(String role){
        return roleRepository.findByRole(role);
    }

}
