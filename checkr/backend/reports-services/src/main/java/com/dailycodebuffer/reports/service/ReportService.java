package com.dailycodebuffer.reports.service;



import com.dailycodebuffer.reports.dto.ReportDTO;
import com.dailycodebuffer.reports.entity.Report;

import java.util.List;

public interface ReportService {

    public List<Report> getAllReports();
    ReportDTO saveReport(ReportDTO reportDTO);

    Report getReportByCandidateId(int id);
    void deleteReport(int id);

    Report getReportById(int id);

    ReportDTO updateReportByCandidateid(int candidateId, ReportDTO reportDTO);
}
