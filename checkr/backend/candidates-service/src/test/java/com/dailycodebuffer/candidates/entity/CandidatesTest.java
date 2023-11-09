package com.dailycodebuffer.candidates.entity;


import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class CandidatesTest {

    @Test
    public void givenEmptyConstructor_whenCreateCandidate_thenCandidateIsNotNull() {
        Candidates candidates = new Candidates();
        assertNotNull(candidates);
    }

    @Test
    void givenArgsConstructor_whenCreateCandidatesWithParameters_thenCandidatesFieldsAreSet() {
        Date dob = new Date(2022, 2, 22);
        Date created_at = new Date(2022, 2, 22);
        Date date = new Date(2022, 2, 22);
        Candidates candidates = new
                Candidates(1, "John Smith", "USA", "john.smith@gmail.com",
                dob, "12345", "6789",
                "dl123", "sc456", created_at, date);

        // Verify
        assertEquals(1, candidates.getId());
        assertEquals("John Smith", candidates.getName());
        assertEquals("USA", candidates.getLocation());
        assertEquals("john.smith@gmail.com", candidates.getEmail());
        assertEquals(dob, candidates.getDob());
        assertEquals("12345", candidates.getPhone_no());
        assertEquals("6789", candidates.getZipcode());
        assertEquals("dl123", candidates.getDriver_license());
        assertEquals("sc456", candidates.getSocial_security());
        assertEquals(created_at, candidates.getCreated_at());
        assertEquals(date, candidates.getDate());
    }

    @Test
    void givenCandidateId_whenSetId_thenCandidateIdIsSet() {
        //given
        Candidates candidates = new Candidates();
        candidates.setId(1);

        //verify
        assertEquals(1, candidates.getId());
    }

    @Test
    public void givenCandidateName_whenGetCandidateName_thenReturnCandidateName() {
        //Given
        Candidates candidates = new Candidates();
        candidates.setName("John Smith");

        //Verify
        assertEquals("John Smith", candidates.getName());
    }

    @Test
    void givenCandidateLocation_whenGetLocation_thenReturnLocation() {
        //Given
        Candidates candidates = new Candidates();
        candidates.setLocation("USA");

        //Verify
        assertEquals("USA", candidates.getLocation());
    }


    @Test
    void givenCandidateEmail_whenGetEmail_thenReturnEmail() {
        //Given
        Candidates candidates = new Candidates();
        candidates.setEmail("john.smith@gmail.com");

        //Verify
        assertEquals("john.smith@gmail.com", candidates.getEmail());
    }

    @Test
    void givenCandidateDOB_whenGetDOB_thenReturnDOB() {
        //Given
        Candidates candidates = new Candidates();
        Date dob = new Date(2022, 2, 22);
        candidates.setDob(dob);

        //Verify
        assertEquals(dob, candidates.getDob());
    }

    @Test
    void givenCandidatephone_whenGetPhone_thenReturnPhone() {
        //Given
        Candidates candidates = new Candidates();
        candidates.setPhone_no("12345");

        //Verify
        assertEquals("12345", candidates.getPhone_no());
    }

    @Test
    void givenCandidateZip_whenGetZip_thenReturnZip() {
        //Given
        Candidates candidates = new Candidates();
        candidates.setZipcode("560064");

        //Verify
        assertEquals("560064", candidates.getZipcode());
    }


    @Test
    void givenCandidateDL_whenGetDL_thenReturnDL() {
        //Given
        Candidates candidates = new Candidates();
        candidates.setDriver_license("dl123");

        //Verify
        assertEquals("dl123", candidates.getDriver_license());
    }

    @Test
    void givenCandidateSS_whenGetSS_thenReturnSS() {
        //Given
        Candidates candidates = new Candidates();
        candidates.setSocial_security("ss123");

        //Verify
        assertEquals("ss123", candidates.getSocial_security());
    }


    @Test
    public void givenDate_whenGetDate_thenReturnDate() {
        //Given
        Candidates candidates = new Candidates();
        Date date = new Date(2022, 2, 22);
        candidates.setDate(date);

        //Verify
        assertEquals(date, candidates.getDate());
    }

    @Test
    public void givenCreatedDate_whenGetCreatedDate_thenReturnCreatedDate() {
        //Given
        Candidates candidates = new Candidates();
        Date date = new Date(2022, 2, 22);
        candidates.setCreated_at(date);

        //Verify
        assertEquals(date, candidates.getCreated_at());
    }


    @Test
    public void givenCandidateId_whenGetCandidateId_thenReturnCandidateId() {
        //Given
        Candidates candidates = new Candidates();
        candidates.setId(1);

        //Verify
        assertEquals(1, candidates.getId());
    }
}
