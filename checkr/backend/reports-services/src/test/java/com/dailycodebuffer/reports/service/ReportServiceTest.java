package com.dailycodebuffer.reports.service;


import com.dailycodebuffer.reports.dao.ReportRepository;
import com.dailycodebuffer.reports.dto.ReportDTO;
import com.dailycodebuffer.reports.entity.Report;
import com.dailycodebuffer.reports.enums.Adjudication;
import com.dailycodebuffer.reports.enums.Status;
import com.dailycodebuffer.reports.exceptions.ReportNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.any;


class ReportServiceTest {
    @Mock
    private ReportRepository reportRepository;
    @InjectMocks
    private ReportServiceImpl reportService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void givenReportsInDataBase_whenFindAllReports_thenReturnAllReports(){
        //Given
        List<Report> reportList = new ArrayList<>();
        reportList.add(new Report());
        reportList.add(new Report());

        //when
        when(reportRepository.findAll()).thenReturn(reportList);

        //Act
        List<Report> reports = reportService.getAllReports();

        //verify
        assertEquals(reports, reportList);
        verify(reportRepository, times(1)).findAll();
    }

    @Test
    void givenReportId_whenFindReportById_thenReportIsReturned(){
        //Given
        Report report = new Report();

        //when
        when(reportRepository.findById(1)).thenReturn(Optional.of(report));

        //Act
        Report report1 = reportService.getReportById(1);

        //verify
        assertEquals(report1,report);
        verify(reportRepository, times(1)).findById(1);
    }
    @Test
    void givenNonExistentReportId_whenFindByReportId_thenRunTimeExceptionIsThrown(){
            int nonExistentId = 123; // An ID that is not in the database
            when(reportRepository.findById(nonExistentId)).thenReturn(Optional.empty());

            assertThrows(ReportNotFoundException.class, () -> {
                reportService.getReportById(nonExistentId);
            });
    }
    @Test
    void givenCandidateId_whenGetReportByCandidateId_thenReturnReport(){
        //Given
        Report report = new Report();

        //when
        when(reportRepository.findByCandidateId(1)).thenReturn(report);

        //Act
        Report report1 = reportService.getReportByCandidateId(1);

        //verify
        assertEquals(report1, report);
        verify(reportRepository, times(1)).findByCandidateId(1);
    }

    @Test
    void givenReport_whenSaveReport_thenReturnSavedReport(){
        //Given
        ReportDTO reportDTO = new ReportDTO();
        reportDTO.setId(0);
        Report report = new Report();
        report.setId(0);

        //when
        when(reportRepository.save(any(Report.class))).thenReturn(report);

        //Act
        ReportDTO report1 = reportService.saveReport(reportDTO);

        //verify
       assertEquals(report1,reportDTO);
    }

    @Test
    void givenReportId_whenDeleteReportById_thenDeleteReport(){
        //Given
        Report report = new Report();
        report.setId(1);

        //Act
        reportService.deleteReport(1);

        //verify
        verify(reportRepository, times(1)).deleteById(1);
    }
    @Test
    void givenValidCandidateIdAndReportToUpdate_whenUpdateReportByCandidateId_thenReturnUpdatedReport() {
        // Given
        int candidateId = 2;
        LocalDateTime createdAt = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        LocalDateTime completedDate = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        Report existingReport = new Report(1, Status.CLEAR, Adjudication.ENGAGE,"Employee Pro", createdAt, completedDate, "2 days",candidateId);
        ReportDTO updateReport =  new ReportDTO(1, Status.CONSIDER, Adjudication.ADVERSE_ACTION,"Employee", createdAt, completedDate, "3 days",candidateId);
        when(reportRepository.findByCandidateId(candidateId)).thenReturn(existingReport);

        // When
        reportService.updateReportByCandidateid(candidateId, updateReport);

        // Then
        verify(reportRepository, times(1)).findByCandidateId(candidateId);
    }
    @Test
    void givenValidCandidateIdAndReportToUpdate_whenUpdateReportByCandidateIdOnlySomeFields_thenReturnUpdatedReport() {
        // Given
        int candidateId = 2;
        LocalDateTime createdAt = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        LocalDateTime completedDate = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        Report existingReport = new Report(1, Status.CLEAR, Adjudication.ENGAGE,"Employee Pro", createdAt, completedDate, "2 days",candidateId);
        ReportDTO updateReport =  new ReportDTO(1, null, null,null, null, null, null,candidateId);
        when(reportRepository.findByCandidateId(candidateId)).thenReturn(existingReport);

        // When
        reportService.updateReportByCandidateid(candidateId, updateReport);

        // Then
        verify(reportRepository, times(1)).findByCandidateId(candidateId);
    }

}
