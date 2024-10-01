package com.example.userloginapp.repository;

import com.example.userloginapp.model.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PolicyRepository extends JpaRepository<Policy, Long> {
    // Additional query methods can be defined here
}