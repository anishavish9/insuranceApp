package com.example.userloginapp.controller;

import com.example.userloginapp.model.Policy;
import com.example.userloginapp.service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/policy")
@CrossOrigin(origins = "*" , maxAge = 3600)
public class PolicyController {

    @Autowired
    private PolicyService policyService;

    @GetMapping("/all")
    public List<Policy> getAllPolicies() {
        return policyService.getAllPolicies();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Policy> getPolicyById(@PathVariable Long id) {
        Policy policy = policyService.getPolicyById(id);
        return policy != null ? ResponseEntity.ok(policy) : ResponseEntity.notFound().build();
    }

    @PostMapping("/register")
    public ResponseEntity<Policy> registerPolicy(@RequestBody Policy policy) {
        Policy savedPolicy = policyService.savePolicy(policy);
        return ResponseEntity.ok(savedPolicy);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePolicy(@PathVariable Long id) {
        policyService.deletePolicy(id);
        return ResponseEntity.noContent().build();
    }
}