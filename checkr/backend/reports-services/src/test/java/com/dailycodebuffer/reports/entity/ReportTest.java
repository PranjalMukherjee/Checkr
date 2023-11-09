package com.dailycodebuffer.reports.entity;


import com.dailycodebuffer.reports.enums.Adjudication;
import com.dailycodebuffer.reports.enums.Status;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class ReportTest {

    @Test
    void givenEmptyConstructor_whenCreatedReport_theAssertReportNotNull(){
        Report report = new Report();
        assertNotNull(report);
    }

    @Test
    void givenValidData_whenCreatingReport_thenReportIsCreated() {
        // Given
        Status status = Status.CLEAR;
        Adjudication adjudication = Adjudication.ENGAGE;
        String packageName = "Employee Pro";
        LocalDateTime createdAt = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        LocalDateTime completedDate = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        String turnAroundTime = "2 days";
        int candidateId = 12345;

        // When
        Report report = new Report(1,status, adjudication, packageName, createdAt, completedDate, turnAroundTime, candidateId);

        // Then
        assertNotNull(report);
        assertEquals(status, report.getStatus());
        assertEquals(adjudication, report.getAdjudication());
        assertEquals(packageName, report.getPackageName());
        assertEquals(createdAt, report.getCreatedAt());
        assertEquals(completedDate, report.getCompletedDate());
        assertEquals(turnAroundTime, report.getTurnAroundTime());
        assertEquals(candidateId, report.getCandidateId());
    }

    @Test
    void givenReportId_whenSetId_thenReportIdIsSet(){
        //Given

        Report report = new Report();
        report.setId(1);

        //Verify
        assertEquals(1, report.getId());
    }

    @Test
    void givenReportStatus_whenGetReportStatus_thenReturnReportStatus(){
        //Given
        Report report = new Report();
        report.setStatus(Status.CLEAR);

        //Verify
        assertEquals(Status.CLEAR, report.getStatus());
    }

    @Test
    void givenAdjudicationName_whenGetAdjudicationName_thenReturnAdjudication(){
        //Given
        Report report = new Report();
        report.setAdjudication(Adjudication.ENGAGE);

        //Verify
        assertEquals(Adjudication.ENGAGE, report.getAdjudication());
    }

    @Test
    void givenPackageName_whenGetPackageName_thenReturnPackageName(){
        //Given
        Report report = new Report();
        report.setPackageName("Employee Pro");

        //Verify
        assertEquals("Employee Pro",report.getPackageName());
    }

    @Test
    void givenCreatedAtDate_whenGetCreatedAt_thenReturnCreatedAt(){
        //Given
        Report report = new Report();
        LocalDateTime createdAt = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        report.setCreatedAt(createdAt);

        //verify
        assertEquals(createdAt, report.getCreatedAt());
    }

    @Test
    void givenCompletedDate_whenGetCompletedDate_thenGetCompletedDate(){
        //Given
        Report report = new Report();
        LocalDateTime completedDate = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        report.setCompletedDate(completedDate);

        //Verify
        assertEquals(completedDate, report.getCompletedDate());
    }

    @Test
    void givenTurnAroundTime_whenGetTurnAroundTime_thenReturnTurnAroundTime(){
        // Given
        Report report = new Report();
        report.setTurnAroundTime("2 days");

        //verify
        assertEquals("2 days", report.getTurnAroundTime());
    }

    @Test
    void givenCandidateId_whenGetCandidateId_thenReturnCandidateId(){
        //Given
        Report report = new Report();
        report.setCandidateId(1);

        //verify
        assertEquals(1, report.getCandidateId());
    }


}
