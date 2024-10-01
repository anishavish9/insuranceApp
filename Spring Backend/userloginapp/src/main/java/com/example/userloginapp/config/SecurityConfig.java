package com.example.userloginapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable() // Disable CSRF for Postman testing
            .authorizeHttpRequests(authorizeRequests ->
                authorizeRequests
                    .requestMatchers("/api/auth/register", "/api/auth/login").permitAll() // Public endpoints
                    .requestMatchers("/api/vehicle/register","/api/vehicle/all","/api/vehicle/**","/api/policy/**").permitAll() // Allow public access to vehicle registration
                    .anyRequest().authenticated() // All other endpoints require authentication
            )
            .httpBasic(); // Use basic authentication

        return http.build();
    }
}