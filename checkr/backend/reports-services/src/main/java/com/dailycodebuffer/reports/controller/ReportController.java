package com.dailycodebuffer.reports.controller;



import com.dailycodebuffer.reports.dto.ReportDTO;
import com.dailycodebuffer.reports.entity.Report;
import com.dailycodebuffer.reports.exceptions.ReportNotFoundException;
import com.dailycodebuffer.reports.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.List;

@RestController
@RequestMapping("/reports")
@CrossOrigin(origins = {"http://localhost:3001","https://bc104-fe.fe-assignment.tk"},methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.PATCH})
public class ReportController {
    @Autowired
    private ReportService reportService;

    @GetMapping("/")
    public List<Report> getAllReports(){
        return reportService.getAllReports();
    }

    @GetMapping("/{id}")
    public Report getReportById(@PathVariable int id){
        return reportService.getReportById(id);
    }

    @GetMapping("/by-candidate")
    public Report getReportByCandidateId(@RequestParam("candidateId") int candidateId){
        return reportService.getReportByCandidateId(candidateId);
    }

    @PostMapping("/")
    public ReportDTO saveReport(@RequestBody ReportDTO reportDTO){
        return reportService.saveReport(reportDTO);
    }

    @PatchMapping("/{candidateId}")
    public ReportDTO updateReport(@PathVariable int candidateId, @RequestBody ReportDTO reportDTO ){
        return reportService.updateReportByCandidateid(candidateId, reportDTO);
    }
    @DeleteMapping("/{id}")
    public String deleteReport(@PathVariable int id){
        if(reportService.getReportById(id) == null){
            throw new ReportNotFoundException("report of id "+id+" does not exist");
        }
        reportService.deleteReport(id);
        return "deleted the report of id - "+id;
    }
}
