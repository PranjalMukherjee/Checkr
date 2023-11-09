package com.dailycodebuffer.candidates.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;

import java.util.Date;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Candidates {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "location")
    private String location;

    @Column(name = "email")
    private String email;

    @Column(name = "dob")
    private Date dob;

    @Column(name = "phone_no")
    private String phone_no;

    @Column(name = "zipcode")
    private String zipcode;

    @Column(name = "driver_license")
    private String driver_license;

    @Column(name = "social_security")
    private String social_security;

    @Column(name = "created_at")
    private Date created_at;

    @Column(name = "date")
    private Date date;
}
