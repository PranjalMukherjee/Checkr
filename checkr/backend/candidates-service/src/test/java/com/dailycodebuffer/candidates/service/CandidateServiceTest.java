package com.dailycodebuffer.candidates.service;

import com.dailycodebuffer.candidates.VO.Report;
import com.dailycodebuffer.candidates.VO.ResponseTemplateVO;
import com.dailycodebuffer.candidates.dao.CandidatesRepository;
import com.dailycodebuffer.candidates.dto.CandidatesDTO;
import com.dailycodebuffer.candidates.entity.Candidates;
import com.dailycodebuffer.candidates.exceptions.CandidateNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.eq;
import static org.mockito.Matchers.anyInt;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;


public class CandidateServiceTest {

    @InjectMocks
    private CandidatesService candidatesService;
    @Mock
    private RestTemplate restTemplate;
    @Mock
    private CandidatesRepository candidatesRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void getAllCandidates() {
        List<Candidates> candidates = new ArrayList<>();
        candidates.add(new Candidates(1, "Derek", "Delhi",
                "derekallen105@gmail.com", new Date(2001, 2, 21), "12345",
                "560064", "dl123", "123ss",
                new Date(2001, 2, 21), new Date(2001, 2, 21)));
        candidates.add(new Candidates(2, "Allen", "Delhi",
                "derekallen105@gmail.com", new Date(2001, 2, 21), "12345",
                "560064", "dl123", "123ss",
                new Date(2001, 2, 21), new Date(2001, 2, 21)));

        when(candidatesRepository.findAll()).thenReturn(candidates);

        List<Candidates> result = candidatesService.getAllCandidates();

        assertEquals(2, result.size());
        assertEquals(candidates, result);
        verify(candidatesRepository, times(1)).findAll();
    }

    @Test
    void testGetCandidateById() {
        Candidates candidate = new Candidates(1, "Derek", "Delhi",
                "derekallen105@gmail.com", new Date(2001, 2, 21), "12345",
                "560064", "dl123", "123ss",
                new Date(2001, 2, 21), new Date(2001, 2, 21));
        when(candidatesRepository.findById(anyInt())).thenReturn(Optional.of(candidate));

        Optional<Candidates> result = candidatesService.getCandidatesById(1);

        assertEquals(candidate, result.get());
        assertTrue(result.isPresent());
        verify(candidatesRepository, times(1)).findById(1);
    }
    @Test
    void testGetCandidateByCandidateId() {
        Candidates candidate = new Candidates(1, "Derek", "Delhi",
                "derekallen105@gmail.com", new Date(2001, 2, 21), "12345",
                "560064", "dl123", "123ss",
                new Date(2001, 2, 21), new Date(2001, 2, 21));
        when(candidatesRepository.findById(anyInt())).thenReturn(Optional.of(candidate));

        Candidates result = candidatesService.findCandidateById(1);

        assertEquals(candidate, result);
        verify(candidatesRepository, times(1)).findById(1);
    }

    @Test
    void testGetCandidateForInvalidId(){
        int nonExistentId = 123; // An ID that is not in the database
        when(candidatesRepository.findById(nonExistentId)).thenReturn(Optional.empty());

        assertThrows(CandidateNotFoundException.class, () -> {
            candidatesService.findCandidateById(nonExistentId);
        });
    }

    @Test
    void givenCandidateId_whenFindCandidateById_thenCandidateIsReturned() {
        //Given
        Candidates candidates = new Candidates();

        //when
        when(candidatesRepository.findById(1)).thenReturn(Optional.of(candidates));

        //Act
        Candidates candidates1 = candidatesService.findCandidateById(1);

        //verify
        assertEquals(candidates1, candidates);
        verify(candidatesRepository, times(1)).findById(1);
    }

    @Test
    void testSaveCandidate() {
        Candidates candidate = new Candidates(1, "Derek", "Delhi",
                "derekallen105@gmail.com", new Date(2001, 2, 21), "12345",
                "560064", "dl123", "123ss",
                new Date(2001, 2, 21), new Date(2001, 2, 21));
        when(candidatesRepository.save(candidate)).thenReturn(candidate);

        Candidates result = candidatesService.saveCandidate(candidate);

        assertEquals(candidate, result);
        verify(candidatesRepository, times(1)).save(candidate);
    }
    @Test
    void testSaveCandidates() {
        //Given
        CandidatesDTO candidatesDTO = new CandidatesDTO();
        candidatesDTO.setId(0);

        Candidates candidates = new Candidates();
        candidates.setId(0);

        //when
        when(candidatesRepository.save(any(Candidates.class))).thenReturn(candidates);

        //Act
        CandidatesDTO savedCandidatesDto = candidatesService.saveCandidates(candidatesDTO);

        //verify
        assertEquals(savedCandidatesDto, candidatesDTO);
    }

    @Test
    public void testGetAllCandidatesWithReports() {
        List<Candidates> candidatesList = new ArrayList<>();
        candidatesList.add(new Candidates());
        candidatesList.add(new Candidates());
        Page<Candidates> candidatesPage = new PageImpl<>(candidatesList);
        when(candidatesRepository.findAll(any(Pageable.class))).thenReturn(candidatesPage);

        Report mockReport = new Report();
        when(restTemplate.getForObject(anyString(), eq(Report.class))).thenReturn(mockReport);

        List<ResponseTemplateVO> result = candidatesService.getAllCandidatesWithReports(0, 10);

        assertEquals(candidatesList.size(), result.size());
    }


}
