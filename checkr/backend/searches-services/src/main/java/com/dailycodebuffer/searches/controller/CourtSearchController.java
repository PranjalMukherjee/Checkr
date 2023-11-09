package com.dailycodebuffer.searches.controller;

import com.dailycodebuffer.searches.dto.CourtSearchDTO;
import com.dailycodebuffer.searches.exception.CandidateNotFoundException;

import com.dailycodebuffer.searches.exception.ServiceException;
import com.dailycodebuffer.searches.service.CourtSearchService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/searches")
@Slf4j
public class CourtSearchController {
    private CourtSearchService courtSearchService;

    @Autowired
    public CourtSearchController(CourtSearchService courtSearchService) {
        this.courtSearchService = courtSearchService;
    }

    @GetMapping("/")
    public List<CourtSearchDTO> getAllCourtSearches() {
        try {
            return courtSearchService.getAllCourtSearches();
        } catch (Exception e) {
            throw new ServiceException("Some error occurred");
        }
    }

    @PostMapping("/")
    public CourtSearchDTO saveCourtSearches(@RequestBody CourtSearchDTO courtSearchDTO) {
        try {

            log.info("is : " + courtSearchDTO);
            return courtSearchService.saveCourtSearches(courtSearchDTO);
        } catch (Exception e) {
            throw new CandidateNotFoundException("Candidate not found by this id : " + courtSearchDTO.getCandidateId());
        }
    }


    @GetMapping("/{id}")
    public CourtSearchDTO getCourtSearchesWithID(@PathVariable int id) {

        return courtSearchService.getCourtSearchesWithId(id);


    }

}
