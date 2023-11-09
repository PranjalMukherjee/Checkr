package com.dailycodebuffer.reports.controller;


import com.dailycodebuffer.reports.dto.ReportDTO;
import com.dailycodebuffer.reports.entity.Report;
import com.dailycodebuffer.reports.enums.Adjudication;
import com.dailycodebuffer.reports.enums.Status;
import com.dailycodebuffer.reports.service.ReportService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.anyInt;


class ReportControllerTest {
    @Mock
    private ReportService reportService;
    @InjectMocks
    private ReportController reportController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void givenReportsInDateBase_whenGetListOfReports_thenReturnListOfReports(){
        List<Report> mockReports = new ArrayList<>();
        LocalDateTime createdAt = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        LocalDateTime completedDate = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        mockReports.add(new Report(1, Status.CLEAR, Adjudication.ENGAGE,"Employee Pro", createdAt, completedDate, "2 days",1));
        mockReports.add(new Report(2, Status.CONSIDER, Adjudication.ADVERSE_ACTION,"Employee", createdAt, completedDate, "3 days",2));

        //when
        when(reportService.getAllReports()).thenReturn(mockReports);

        //Act
        List<Report> result = reportController.getAllReports();

        //verify
        assertEquals(mockReports, result);
        verify(reportService, times(1)).getAllReports();

    }

    @Test
    void givenReportId_whenGetReportById_thenReturnReport(){
        //Given
        int id = 1;
        Report mockReport = new Report();
        mockReport.setId(id);

        //when
        when(reportService.getReportById(id)).thenReturn(mockReport);

        //Act
        Report result = reportController.getReportById(id);

        //verify
        assertEquals(mockReport, result);
        verify(reportService, times(1)).getReportById(id);
    }

    @Test
    void givenCandidateId_whenGetReportByCandidateId_thenReturnReport(){
        //Given
        int candidateId = 1;
        Report mockReport = new Report();
        mockReport.setCandidateId(candidateId);

        //when
        when(reportService.getReportByCandidateId(candidateId)).thenReturn(mockReport);

        //Act
        Report result = reportController.getReportByCandidateId(candidateId);

        //verify
        assertEquals(mockReport, result);
        verify(reportService, times(1)).getReportByCandidateId(candidateId);
    }

    @Test
    void givenReport_whenSaveReport_ReportIdSaved(){
        // Given
        LocalDateTime createdAt = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        LocalDateTime completedDate = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        ReportDTO reportDTO = new ReportDTO(1, Status.CLEAR, Adjudication.ENGAGE,"Employee Pro", createdAt, completedDate, "2 days",1);

        //When
        when(reportService.saveReport(any(ReportDTO.class))).thenReturn(reportDTO);

        //Act
        ReportDTO result = reportController.saveReport(reportDTO);

        //verify
        assertEquals(reportDTO, result);
        verify(reportService, times(1)).saveReport(reportDTO);

    }
    @Test
    void givenUpdatedReportWithCandidateId_whenReportIsUpdated_thenUpdatedReportIsReturned(){
        //Given
        int candidateId = 1;
        ReportDTO mockReport = new ReportDTO();

        //when
        when(reportService.updateReportByCandidateid(anyInt(),any(ReportDTO.class)))
                .thenReturn(mockReport);

        //Act
        ReportDTO result = reportController.updateReport(candidateId, mockReport);

        //Verify
        assertEquals(mockReport, result);
        verify(reportService, times(1)).updateReportByCandidateid(candidateId, mockReport);
    }
    @Test
    void givenNonexistentReportId_whenDeleteReport_thenThrowException() {
        //Act
        assertThrows(RuntimeException.class, () -> {
            reportController.deleteReport(1);
        });
    }

    @Test
    void givenReportId_whenDeleteReportById_thenReportIsDeleted() {
        //Given
        LocalDateTime createdAt = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        LocalDateTime completedDate = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        Report report = new Report(1, Status.CLEAR, Adjudication.ENGAGE,"Employee Pro", createdAt, completedDate, "2 days",1);
        String expected = "deleted the report of id - 1";
        //when
        when(reportService.getReportById(1)).thenReturn(report);

        //Act
        String Actual = reportController.deleteReport(1);

        //verify
        assertEquals(expected,Actual);
        verify(reportService, times(1)).deleteReport(1);
    }
}
