package com.dailycodebuffer.candidates.rest;

import com.dailycodebuffer.candidates.VO.Report;
import com.dailycodebuffer.candidates.VO.ResponseTemplateVO;
import com.dailycodebuffer.candidates.entity.Candidates;
import com.dailycodebuffer.candidates.controller.CandidatesController;
import com.dailycodebuffer.candidates.dto.CandidatesDTO;
import com.dailycodebuffer.candidates.enums.Adjudication;
import com.dailycodebuffer.candidates.enums.Status;
import com.dailycodebuffer.candidates.service.CandidatesService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.times;

import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;
import java.util.List;
import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

public class CandidateControllerTest {

    @Mock
    private CandidatesService candidatesService;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private CandidatesController candidatesController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }


    @Test
    void givenCandidatesInService_whenGetListOfCandidates_thenReturnListOfCandidates() {
        // Given
        List<Candidates> candidatesList = new ArrayList<>();
        candidatesList.add(new Candidates(1, "John Smith", "USA", "john.smith@gmail.com",
                new Date(2022, 2, 22), "12345", "6789",
                "dl123", "sc456",
                new Date(2022, 2, 22), new Date(2022, 2, 22)));
        candidatesList.add(new Candidates(2, "Smith", "US", "smith@gmail.com",
                new Date(2023, 3, 22), "123456", "67389",
                "dl1123", "s1c456",
                new Date(2023, 2, 22), new Date(2023, 2, 22)));

        when(candidatesService.getAllCandidates()).thenReturn(candidatesList);

        // When
        List<Candidates> result = candidatesController.getAllCandidates();

        // Then
        assertEquals(candidatesList, result);
        verify(candidatesService, times(1)).getAllCandidates();
    }


    @Test
    void getCandidateById_WithValidId_ReturnsBankDTO() {
        int candidateId = 1;
        Candidates candidates = new Candidates(candidateId, "Derek", "Delhi",
                "derekallen105@gmail.com", new Date(2001, 2, 21), "12345",
                "560064", "dl123", "123ss",
                new Date(2001, 2, 21), new Date(2001, 2, 21));
        CandidatesDTO candidatesDTO = new CandidatesDTO(candidateId, "Derek", "Delhi",
                "derekallen105@gmail.com", new Date(2001, 2, 21), "12345",
                "560064", "dl123", "123ss",
                new Date(2001, 2, 21), new Date(2001, 2, 21));

        when(candidatesService.getCandidatesById(candidateId)).thenReturn(Optional.of(candidates));
        when(modelMapper.map(candidates, CandidatesDTO.class)).thenReturn(candidatesDTO);

        ResponseEntity<CandidatesDTO> response = candidatesController.getCandidatesById(candidateId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(candidatesDTO, response.getBody());
    }

    @Test
    void getCandidateById_WithInvalidId_ReturnsNotFound() {
        int id = 1;
        when(candidatesService.getCandidatesById(id)).thenReturn(Optional.empty());

        ResponseEntity<CandidatesDTO> response = candidatesController.getCandidatesById(id);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void createCandidate_ReturnsCreatedCandidateDTO() {
        CandidatesDTO candidatesDTO = new CandidatesDTO(1, "Derek", "Delhi",
                "derekallen105@gmail.com", new Date(2001, 2, 21), "12345",
                "560064", "dl123", "123ss",
                new Date(2001, 2, 21), new Date(2001, 2, 21));
        Candidates candidate = new Candidates(1, "Derek", "Delhi",
                "derekallen105@gmail.com", new Date(2001, 2, 21), "12345",
                "560064", "dl123", "123ss",
                new Date(2001, 2, 21), new Date(2001, 2, 21));
        when(modelMapper.map(candidatesDTO, Candidates.class)).thenReturn(candidate);
        when(candidatesService.saveCandidate(candidate)).thenReturn(candidate);
        when(modelMapper.map(candidate, CandidatesDTO.class)).thenReturn(candidatesDTO);

        ResponseEntity<CandidatesDTO> response = candidatesController.createCandidate(candidatesDTO);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(candidatesDTO, response.getBody());
    }

    @Test
    void updateCandidate_WithNonExistentCandidate_ReturnsNotFound() {
        int id = 1;
        CandidatesDTO updatedCandidateDTO = new CandidatesDTO(1, "Derek", "Delhi",
                "derekallen105@gmail.com", new Date(2001, 2, 21), "12345",
                "560064", "dl123", "123ss",
                new Date(2001, 2, 21), new Date(2001, 2, 21));
        when(candidatesService.getCandidatesById(id)).thenReturn(Optional.empty());

        ResponseEntity<CandidatesDTO> response = candidatesController.updateCandidateById(id, updatedCandidateDTO);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void updateCandidate_WithExistingCandidate_ReturnsUpdatedCandidateDTO() {
        int candidate = 1;
        CandidatesDTO updatedCandidatesDTO = new CandidatesDTO(1, "Derek", "Delhi",
                "derekallen105@gmail.com", new Date(2001, 2, 21), "12345",
                "560064", "dl123", "123ss",
                new Date(2001, 2, 21), new Date(2001, 2, 21));
        Candidates updatedCandidates = new Candidates(1, "Allen", "Delhi",
                "derekallen105@gmail.com", new Date(2001, 2, 21), "12345",
                "560064", "dl123", "123ss",
                new Date(2001, 2, 21), new Date(2001, 2, 21));

        when(modelMapper.map(updatedCandidatesDTO, Candidates.class)).thenReturn(updatedCandidates);
        when(candidatesService.getCandidatesById(candidate)).thenReturn(Optional.of(new Candidates()));
        when(candidatesService.saveCandidate(updatedCandidates)).thenReturn(updatedCandidates);
        when(modelMapper.map(updatedCandidates, CandidatesDTO.class)).thenReturn(updatedCandidatesDTO);

        ResponseEntity<CandidatesDTO> response = candidatesController.updateCandidateById(candidate, updatedCandidatesDTO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(updatedCandidatesDTO, response.getBody());
    }
    @Test
    void testGetAllCandidatesWithReports(){
        //Given
        List<ResponseTemplateVO> responseTemplateVOList = new ArrayList<>();
        Candidates candidates = new Candidates();
        candidates.setId(1);
        LocalDateTime createdAt = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        LocalDateTime completedDate = LocalDateTime.of(2023, 8, 3, 12, 0, 0);
        Report report = new Report(1, Status.CLEAR, Adjudication.ENGAGE,"Employee Pro", createdAt, completedDate, "2 days",1);
        ResponseTemplateVO responseTemplateVO = new ResponseTemplateVO();
        responseTemplateVO.setCandidates(candidates);
        responseTemplateVO.setReport(report);

        responseTemplateVOList.add(responseTemplateVO);

        //when
        when(candidatesService.getAllCandidatesWithReports(0,1)).thenReturn(responseTemplateVOList);

        //then
        List<ResponseTemplateVO> responseTemplateVOList1 = candidatesController.getAllCandidatesWithReports(0,1);

        //verify
        assertEquals(responseTemplateVOList1,responseTemplateVOList);
        verify(candidatesService, times(1)).getAllCandidatesWithReports(0,1);

    }

}
