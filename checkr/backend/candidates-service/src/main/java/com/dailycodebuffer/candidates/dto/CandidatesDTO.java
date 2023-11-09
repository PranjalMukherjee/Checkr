package com.dailycodebuffer.candidates.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CandidatesDTO {

    private int id;
    private String name;
    private String location;
    private String email;
    private Date dob;
    private String phone_no;
    private String zipcode;
    private String driver_license;
    private String social_security;
    private Date created_at;
    private Date date;

}
