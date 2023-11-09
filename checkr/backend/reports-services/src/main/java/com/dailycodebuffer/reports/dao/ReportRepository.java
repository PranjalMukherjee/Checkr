package com.dailycodebuffer.reports.dao;

import com.dailycodebuffer.reports.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends JpaRepository<Report, Integer> {
    Report findByCandidateId(int id);
}
