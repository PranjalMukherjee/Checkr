package com.dailycodebuffer.searches.controller;

import com.dailycodebuffer.searches.dto.CourtSearchDTO;

import com.dailycodebuffer.searches.exception.CandidateNotFoundException;
import com.dailycodebuffer.searches.exception.ServiceException;
import com.dailycodebuffer.searches.service.CourtSearchService;

import lombok.extern.slf4j.Slf4j;

import org.json.JSONObject;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.mockito.InjectMocks;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;


import javax.ws.rs.core.MediaType;


import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;


import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CourtSearchController.class)

@Slf4j
 class CourtSearchControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CourtSearchService courtSearchService;

    @InjectMocks
    private CourtSearchController courtSearchController;

    private SimpleDateFormat dateFormat;


    @BeforeEach
    public void setup() {

        dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    }

    @Test
   void testGetAllCourtSearches() throws Exception {
        // Mocking the service response
        List<CourtSearchDTO> searchResults = new ArrayList<>();
        searchResults.add(new CourtSearchDTO(1, "CLEAR",
                "CLEAR", "CLEAR", "CLEAR", "CLEAR",
                dateFormat.parse("2020-02-22"), dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"), dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"), 1));

        when(courtSearchService.getAllCourtSearches()).thenReturn(searchResults);

        // Perform the request and assert the response
        mockMvc.perform(get("/searches/"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(searchResults.size())));

    }

    @Test
   void testGetCourtSearchById() throws Exception {
        // Mocking the service response
        CourtSearchDTO courtSearchDTO = new CourtSearchDTO(23, "CLEAR",
                "CLEAR", "CLEAR", "CLEAR", "CLEAR",
                dateFormat.parse("2020-02-22"), dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"), dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"), 1);
        when(courtSearchService.getCourtSearchesWithId(23)).thenReturn(courtSearchDTO);

        // Perform the request and assert the response
        mockMvc.perform(get("/searches/{id}", 23))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(courtSearchDTO.getId())));
    }

    @Test
   void testSaveCourtSearches() throws Exception {
        // Mocking the service response
        CourtSearchDTO courtSearchDTO = new CourtSearchDTO(1, "CLEAR",
                "CLEAR", "CLEAR", "CLEAR", "CLEAR",
                dateFormat.parse("2020-02-22"), dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"), dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"), 1);
        when(courtSearchService.saveCourtSearches(courtSearchDTO)).thenReturn(courtSearchDTO);

        JSONObject requestBody = new JSONObject();
        requestBody.put("ssnVerification", "CLEAR");
        requestBody.put("sexOffender", "CLEAR");
        requestBody.put("globalWatchlist", "CLEAR");
        requestBody.put("federalCriminal", "CLEAR");
        requestBody.put("countyCriminal", "CLEAR");
        requestBody.put("ssnverificationDate", "2022-02-22");
        requestBody.put("sexOffenderDate", "2022-02-22");
        requestBody.put("globalWatchlistDate", "2022-02-22");
        requestBody.put("federalCriminalDate", "2022-02-22");
        requestBody.put("countyCriminalDate", "2022-02-22");
        requestBody.put("candidateId", 1);
        log.debug(requestBody.toString());
        // Perform the request and assert the response
        mockMvc.perform(post("/searches/")
                        .contentType("application/json")
                        .content(requestBody.toString()))
                .andExpect(status().isOk())
        ;


    }

    @Test
    void testGetCourtSearchById_CandidateNotFound() throws Exception {
        int invalidId = 230; // An ID that doesn't exist
        when(courtSearchService.getCourtSearchesWithId(invalidId))
                .thenThrow(new CandidateNotFoundException("Candidate not found by this id : " + invalidId));

        mockMvc.perform(get("/searches/{id}", invalidId))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message", is("Candidate not found by this id : " + invalidId)));
    }

    @Test
   void testGetAllCourtSearches_ServiceException() throws Exception {
        when(courtSearchService.getAllCourtSearches()).thenThrow(new ServiceException("Some Error Occurred"));

        mockMvc.perform(get("/searches/"))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.message", is("Some error occurred")));
    }


    @Test
     void testSaveAllCourtSearches_CandidateNotFoundException() throws Exception {
        JSONObject requestBody = new JSONObject();
        requestBody.put("ssnVerification", "CLEAR");
        requestBody.put("sexOffender", "CLEAR");
        requestBody.put("globalWatchlist", "CLEAR");
        requestBody.put("federalCriminal", "CLEAR");
        requestBody.put("countyCriminal", "CLEAR");
        requestBody.put("ssnverificationDate", "2022-02-22");
        requestBody.put("sexOffenderDate", "2022-02-22");
        requestBody.put("globalWatchlistDate", "2022-02-22");
        requestBody.put("federalCriminalDate", "2022-02-22");
        requestBody.put("countyCriminalDate", "2022-02-22");
        requestBody.put("candidateId", 320);

        CourtSearchDTO search = new CourtSearchDTO(/* initialize with required fields */);
        when(courtSearchService.saveCourtSearches(any())).thenThrow(new CandidateNotFoundException("Candidate not found"));

        mockMvc.perform(MockMvcRequestBuilders.post("/searches/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestBody.toString()))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message", is("Candidate not found by this id : 320")));

        verify(courtSearchService, times(1)).saveCourtSearches(any());


    }


}
