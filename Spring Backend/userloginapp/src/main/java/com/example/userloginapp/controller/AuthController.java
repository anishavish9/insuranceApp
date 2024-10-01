package com.example.userloginapp.controller;

import com.example.userloginapp.model.User;
import com.example.userloginapp.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*" , maxAge = 3600)
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        authService.register(user);
        return ResponseEntity.ok("User registered successfully.");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User authenticatedUser = authService.login(user.getUsername(), user.getPassword());
        if (authenticatedUser != null) {
            return ResponseEntity.ok("Login successful.");
        }
        return ResponseEntity.status(401).body("Invalid username or password.");
    }
}