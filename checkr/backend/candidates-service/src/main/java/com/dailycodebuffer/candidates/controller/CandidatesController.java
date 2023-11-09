package com.dailycodebuffer.candidates.controller;


import com.dailycodebuffer.candidates.VO.ResponseTemplateVO;
import com.dailycodebuffer.candidates.dto.CandidatesDTO;
import com.dailycodebuffer.candidates.entity.Candidates;
import com.dailycodebuffer.candidates.service.CandidatesService;

import org.modelmapper.ModelMapper;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/candidates")
@CrossOrigin(origins = {"http://localhost:3001","https://bc104-fe.fe-assignment.tk"},methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.PATCH})
public class CandidatesController {

    //test
    private final CandidatesService candidatesService;
    private final ModelMapper modelMapper;

    @Autowired
    public CandidatesController(CandidatesService candidatesService, ModelMapper modelMapper) {
        this.candidatesService = candidatesService;
        this.modelMapper = modelMapper;
    }

    @GetMapping
    public List<Candidates> getAllCandidates() {
        return candidatesService.getAllCandidates();
    }


    @GetMapping("/{candidate-id}")
    public ResponseEntity<CandidatesDTO> getCandidatesById(@PathVariable("candidate-id") int id) {
        Optional<Candidates> candidate = candidatesService.getCandidatesById(id);
        return candidate
                .map(value -> new ResponseEntity<>(entityToDTO(value), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<CandidatesDTO> createCandidate(@RequestBody CandidatesDTO candidatesDTO) {
        Candidates candidate = dtoToEntity(candidatesDTO);
        Candidates createdCandidate = candidatesService.saveCandidate(candidate);
        CandidatesDTO createdCandidateDTO = entityToDTO(createdCandidate);
        return new ResponseEntity<>(createdCandidateDTO, HttpStatus.CREATED);
    }

    @PutMapping("/{candidate-id}")
    public ResponseEntity<CandidatesDTO> updateCandidateById(@PathVariable int id, @RequestBody CandidatesDTO candidatesDTO) {
        Optional<Candidates> existingCandidate = candidatesService.getCandidatesById(id);
        if (existingCandidate.isPresent()) {
            Candidates candidate = dtoToEntity(candidatesDTO);
            candidate.setId(id);
            Candidates updatedCandidate = candidatesService.saveCandidate(candidate);
            CandidatesDTO updatedCandidateDTO = entityToDTO(updatedCandidate);
            return new ResponseEntity<>(updatedCandidateDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    private CandidatesDTO entityToDTO(Candidates candidates) {
        return modelMapper.map(candidates, CandidatesDTO.class);
    }

    private Candidates dtoToEntity(CandidatesDTO candidateDTO) {
        return modelMapper.map(candidateDTO, Candidates.class);
    }

    @GetMapping("/report")
    public List<ResponseTemplateVO> getAllCandidatesWithReports(@RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "10") int limit) {
        return candidatesService.getAllCandidatesWithReports(offset, limit);
    }
}
