package com.pdksbackend.pdks.repository;

import com.pdksbackend.pdks.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
@EnableJpaRepositories
public interface CompanyRepository extends JpaRepository<Company, String> {

    @Query(value = "FROM Company c WHERE c.company = ?1")
    List<Company> findByCompanyName(String companyName);
}
