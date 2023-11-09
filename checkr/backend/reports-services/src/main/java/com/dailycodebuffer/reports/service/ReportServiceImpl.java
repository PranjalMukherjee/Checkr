package com.dailycodebuffer.reports.service;


import com.dailycodebuffer.reports.dao.ReportRepository;
import com.dailycodebuffer.reports.dto.ReportDTO;
import com.dailycodebuffer.reports.entity.Report;
import com.dailycodebuffer.reports.exceptions.ReportNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

import static com.dailycodebuffer.reports.mapper.ReportMapper.convertDtoToEntity;
import static com.dailycodebuffer.reports.mapper.ReportMapper.convertEntityToDto;

@Service
public class ReportServiceImpl implements ReportService{
    @Autowired
    private ReportRepository reportRepository;
    @Override
    @Transactional
    public List<Report> getAllReports() {
        return reportRepository.findAll();
    }

    @Override
    @Transactional
    public Report getReportById(int id) {
        Optional<Report> report = reportRepository.findById(id);
        Report report1 = null;
        if(report.isPresent()){
            report1 = report.get();
        }
        else {
            throw new ReportNotFoundException("Did not found the report of id "+id);
        }
        return report1;
    }

    @Override
    @Transactional
    public Report getReportByCandidateId(int id) {
        return reportRepository.findByCandidateId(id);
    }

    @Override
    public ReportDTO updateReportByCandidateid(int candidateId, ReportDTO reportDTO) {
        Report existingReport =reportRepository.findByCandidateId(candidateId);

        ReportDTO updatedReport = ReportDTO.builder()
                .id(existingReport.getId())
                .status(reportDTO.getStatus() != null ? reportDTO.getStatus() : existingReport.getStatus())
                .adjudication(reportDTO.getAdjudication() != null ? reportDTO.getAdjudication() : existingReport.getAdjudication())
                .packageName(reportDTO.getPackageName() != null ? reportDTO.getPackageName() : existingReport.getPackageName())
                .createdAt(reportDTO.getCreatedAt() != null ? reportDTO.getCreatedAt() : existingReport.getCreatedAt())
                .completedDate(reportDTO.getCompletedDate() != null ? reportDTO.getCompletedDate() : existingReport.getCompletedDate())
                .turnAroundTime(reportDTO.getTurnAroundTime() != null ? reportDTO.getTurnAroundTime() : existingReport.getTurnAroundTime())
                .candidateId(existingReport.getCandidateId())
                .build();
        reportRepository.save(convertDtoToEntity(updatedReport));
        return updatedReport;
    }
    @Override
    @Transactional
    public ReportDTO saveReport(ReportDTO reportDTO) {
        reportRepository.save(convertDtoToEntity(reportDTO));
        return reportDTO;
    }


    @Override
    @Transactional
    public void deleteReport(int id) {
        reportRepository.deleteById(id);
    }


}
