package com.example.userloginapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "policy")
public class Policy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String companyName; // Name of the insurance company
    private double idvValue;     // Insured Declared Value
    private double amount;       // Amount for the policy

    // Constructors
    public Policy() {}

    public Policy(String companyName, double idvValue, double amount) {
        this.companyName = companyName;
        this.idvValue = idvValue;
        this.amount = amount;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public double getIdvValue() {
        return idvValue;
    }

    public void setIdvValue(double idvValue) {
        this.idvValue = idvValue;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}