package com.dailycodebuffer.searches.entity;

import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class CourtSearchesTest {
    @Test
    void givenEmptyConstructor_whenCreateCourtSearches_thenCourtSearchIsNotNull() {
        CourtSearch courtSearch = new CourtSearch();
        assertNotNull(courtSearch);
    }

    @Test
    void givenConstructorArgs_thenCourtSearchesInstanceIsCreated() {
        Date ssnverificationDate = new Date(2021, 2, 21);
        Date sexOffenderDate = new Date(2021, 2, 24);
        Date globalWatchlistDate = new Date(2021, 2, 12);
        Date federalCriminalDate = new Date(2021, 2, 23);
        Date countyCriminalDate = new Date(2021, 2, 12);
        CourtSearch courtSearch = new CourtSearch(1, 1,
                CourtSearch.SearchStatus.CLEAR, CourtSearch.SearchStatus.CONSIDER,
                CourtSearch.SearchStatus.CLEAR, CourtSearch.SearchStatus.CONSIDER,
                CourtSearch.SearchStatus.CLEAR, ssnverificationDate, sexOffenderDate,
                globalWatchlistDate, federalCriminalDate, countyCriminalDate);
        assertEquals(1, courtSearch.getId());
        assertEquals(CourtSearch.SearchStatus.CLEAR, courtSearch.getSsnVerification());
        assertEquals(CourtSearch.SearchStatus.CONSIDER, courtSearch.getSexOffender());
        assertEquals(CourtSearch.SearchStatus.CLEAR, courtSearch.getCountyCriminal());
        assertEquals(CourtSearch.SearchStatus.CONSIDER, courtSearch.getFederalCriminal());
        assertEquals(ssnverificationDate,courtSearch.getSsnverificationDate());
        assertEquals(sexOffenderDate,courtSearch.getSexOffenderDate());
        assertEquals(globalWatchlistDate,courtSearch.getGlobalWatchlistDate());
        assertEquals(federalCriminalDate,courtSearch.getFederalCriminalDate());

    }
    @Test
    void givenCandidateId_whenGetCandidateId_thenReturnCandidateId() {
        CourtSearch courtSearch = new CourtSearch();
        courtSearch.setCandidateId(1);
        assertEquals(1, courtSearch.getCandidateId());
    }
    @Test
    void givenId_whenGetId_thenReturnId() {
        CourtSearch courtSearch = new CourtSearch();
        courtSearch.setId(1);
        assertEquals(1, courtSearch.getId());
    }

    @Test
    void givenGlobalWatchlistStatus_whenGetGlobalWatchlist_thenReturnGlobalWatchlist() {
        CourtSearch courtSearch = new CourtSearch();
        courtSearch.setGlobalWatchlist(CourtSearch.SearchStatus.CLEAR);
        assertEquals(CourtSearch.SearchStatus.CLEAR, courtSearch.getGlobalWatchlist());
    }
    @Test
    void givenSexOffenderStatus_whenGetSexOffenderStatus_thenReturnSexOffenderStatus() {
        CourtSearch courtSearch = new CourtSearch();
        courtSearch.setSexOffender(CourtSearch.SearchStatus.CONSIDER);
        assertEquals(CourtSearch.SearchStatus.CONSIDER, courtSearch.getSexOffender());
    }
    @Test
    void givenCountyCriminalStatus_whenGetCountyCriminalStatus_thenReturnCountyCriminalStatus() {
        CourtSearch courtSearch = new CourtSearch();
        courtSearch.setCountyCriminal(CourtSearch.SearchStatus.CLEAR);
        assertEquals(CourtSearch.SearchStatus.CLEAR, courtSearch.getCountyCriminal());
    }

    @Test
    void givenCountyCriminalDate_whenGetCountyCriminalDate_thenReturnCountyCriminalDate() {
        CourtSearch courtSearch = new CourtSearch();
        Date countyCriminalDate = new Date(2021, 2, 12);
        courtSearch.setCountyCriminalDate(countyCriminalDate);
        assertEquals(countyCriminalDate, courtSearch.getCountyCriminalDate());
    }
    @Test
    void givenSsnVerificationStatus_whenGetSsnVerificationStatus_thenReturnSsnVerificationStatus() {
        CourtSearch courtSearch = new CourtSearch();
        courtSearch.setSsnVerification(CourtSearch.SearchStatus.CLEAR);
        assertEquals(CourtSearch.SearchStatus.CLEAR, courtSearch.getSsnVerification());
    }
    @Test
    void givenSsnVerificationDate_whenGetSsnVerificationDate_thenReturnSsnVerificationDate() {
        CourtSearch courtSearch = new CourtSearch();
        Date ssnVerificationDate = new Date(2021, 2, 12);
        courtSearch.setSsnverificationDate(ssnVerificationDate);
        assertEquals(ssnVerificationDate, courtSearch.getSsnverificationDate());
    }
    @Test
    void givenFederalCriminalStatus_whenGetFederalCriminalStatus_thenReturnFederalCriminalStatus() {
        CourtSearch courtSearch = new CourtSearch();
        courtSearch.setFederalCriminal(CourtSearch.SearchStatus.CONSIDER);
        assertEquals(CourtSearch.SearchStatus.CONSIDER, courtSearch.getFederalCriminal());
    }
    @Test
    void givenFederalCriminalDate_whenGetFederalCriminalDate_thenReturnFederalCriminalDate() {
        CourtSearch courtSearch = new CourtSearch();
        Date federalCriminalDate = new Date(2021, 2, 12);
        courtSearch.setFederalCriminalDate(federalCriminalDate);
        assertEquals(federalCriminalDate, courtSearch.getFederalCriminalDate());
    }
    @Test
    void givenSexOffenderDate_whenGetSexOffenderDate_thenReturnSexOffenderDate() {
        CourtSearch courtSearch = new CourtSearch();
        Date sexOffenderDate = new Date(2021, 2, 12);
        courtSearch.setSexOffenderDate(sexOffenderDate);
        assertEquals(sexOffenderDate, courtSearch.getSexOffenderDate());
    }
    @Test
    void givenGlobalWatchlistDate_whenGetGlobalWatchlistDate_thenReturnGlobalWatchlistDate() {
        CourtSearch courtSearch = new CourtSearch();
        Date globalWatchlistDate = new Date(2021, 2, 12);
        courtSearch.setGlobalWatchlistDate(globalWatchlistDate);
        assertEquals(globalWatchlistDate, courtSearch.getGlobalWatchlistDate());
    }
}
