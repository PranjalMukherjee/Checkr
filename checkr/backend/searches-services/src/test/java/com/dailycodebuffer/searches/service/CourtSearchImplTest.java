package com.dailycodebuffer.searches.service;

import com.dailycodebuffer.searches.converter.CourtSearchConverter;
import com.dailycodebuffer.searches.dto.CourtSearchDTO;
import com.dailycodebuffer.searches.entity.CourtSearch;
import com.dailycodebuffer.searches.exception.CandidateNotFoundException;
import com.dailycodebuffer.searches.repository.CourtSearchesRepo;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

import static org.junit.Assert.*;

import static org.mockito.Mockito.when;


class CourtSearchImplTest {

    @Mock
    private CourtSearchesRepo courtSearchesRepo;

    @InjectMocks
    private CourtSearchImpl courtSearchesService;
    @Mock
    private CourtSearchConverter courtSearchConverter;
    private SimpleDateFormat dateFormat;


    @BeforeEach
    public void setup() {
        dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        MockitoAnnotations.initMocks(this);

    }
    @Test
     void testGetCourtSearchesWithId_NonExistingId() {
setup();
        // Arrange
        int id = 1;
        when(courtSearchesRepo.findById(id)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(CandidateNotFoundException.class, () -> courtSearchesService.getCourtSearchesWithId(id));
    }

    @Test
    void testGetAllCourtSearches() throws ParseException {
        // Arrange
        setup();

        List<CourtSearch> courtSearchList = new ArrayList<>();
        courtSearchList.add(new CourtSearch(1, 1,
                CourtSearch.SearchStatus.CLEAR, CourtSearch.SearchStatus.CLEAR, CourtSearch.SearchStatus.CLEAR
                , CourtSearch.SearchStatus.CLEAR, CourtSearch.SearchStatus.CLEAR, dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"), dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"), dateFormat.parse("2020-02-22")));


        courtSearchList.add(new CourtSearch(2, 1,
                CourtSearch.SearchStatus.CLEAR, CourtSearch.SearchStatus.CLEAR, CourtSearch.SearchStatus.CLEAR
                , CourtSearch.SearchStatus.CLEAR, CourtSearch.SearchStatus.CLEAR, dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"), dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"), dateFormat.parse("2020-02-22")));

        when(courtSearchesRepo.findAll()).thenReturn(courtSearchList);

        List<CourtSearchDTO> expectedDTOList = courtSearchList.stream()
                .map(courtSearchConverter::convertEntityToDTO)
                .collect(Collectors.toList());

        // Act
        List<CourtSearchDTO> actualDTOList = courtSearchesService.getAllCourtSearches();

        // Assert
        assertEquals(expectedDTOList, actualDTOList);
    }

    @Test
    void testSaveCourtSearches() throws ParseException {
        setup();
        // Arrange
        CourtSearchDTO courtSearchDTO = new CourtSearchDTO(1, "CLEAR",
                "CLEAR", "CLEAR", "CLEAR", "CLEAR",
                dateFormat.parse("2020-02-22"), dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"), dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"), 1);

        CourtSearch courtSearch = new CourtSearch(); // Create a valid CourtSearch entity here
        when(courtSearchesRepo.save(Mockito.any(CourtSearch.class))).thenReturn(courtSearch);
        when(courtSearchConverter.convertDTOToEntity(Mockito.any(CourtSearchDTO.class))).thenReturn(courtSearch);
        when(courtSearchConverter.convertEntityToDTO(Mockito.any(CourtSearch.class))).thenReturn(courtSearchDTO);

        // Act
        CourtSearchDTO savedDTO = courtSearchesService.saveCourtSearches(courtSearchDTO);

        // Assert
        assertNotNull(savedDTO);
        assertEquals(courtSearchDTO.getId(), savedDTO.getId());
        assertEquals(courtSearchDTO.getCountyCriminal(), savedDTO.getCountyCriminal());

    }
    @Test
     void testGetAllCourtSearches_EmptyList() {
        setup();
        // Arrange
        when(courtSearchesRepo.findAll()).thenReturn(new ArrayList<>());

        // Act
        List<CourtSearchDTO> result = courtSearchesService.getAllCourtSearches();
        // Assert
        assertNotNull(result);
        assertEquals(0, result.size());
    }
    @Test
   void testGetAllCourtSearches_NonEmptyList() {
        setup();
        // Arrange
        List<CourtSearch> courtSearchList = new ArrayList<>();
        courtSearchList.add(new CourtSearch()); // Add CourtSearch entities here

        when(courtSearchesRepo.findAll()).thenReturn(courtSearchList);

        List<CourtSearchDTO> expectedDTOList = courtSearchList.stream()
                .map(courtSearchConverter::convertEntityToDTO)
                .collect(Collectors.toList());

        // Act
        List<CourtSearchDTO> result = courtSearchesService.getAllCourtSearches();

        // Assert
        assertNotNull(result);
        assertEquals(expectedDTOList.size(), result.size());

    }
    @Test
    void testGetCourtSearchesWithId_ExistingId() {
        setup();
        // Arrange
        int id = 1;
        Date ssnverificationDate = new Date(2021, 2, 21);
        Date sexOffenderDate = new Date(2021, 2, 24);
        Date globalWatchlistDate = new Date(2021, 2, 12);
        Date federalCriminalDate = new Date(2021, 2, 23);
        Date countyCriminalDate = new Date(2021, 2, 12);
        CourtSearch courtSearch = new CourtSearch(1,1, CourtSearch.SearchStatus.CLEAR, CourtSearch.SearchStatus.CONSIDER, CourtSearch.SearchStatus.CLEAR, CourtSearch.SearchStatus.CONSIDER, CourtSearch.SearchStatus.CLEAR,ssnverificationDate,sexOffenderDate,globalWatchlistDate,federalCriminalDate,countyCriminalDate);
        when(courtSearchesRepo.findById(id)).thenReturn(Optional.of(courtSearch));

        // Act
        CourtSearchDTO result = courtSearchesService.getCourtSearchesWithId(id);

        // Assert
        assertNull(result);


    }





}
