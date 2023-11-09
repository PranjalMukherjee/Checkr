package com.dailycodebuffer.searches.service;

import com.dailycodebuffer.searches.dto.CourtSearchDTO;

import java.util.List;


public interface CourtSearchService {
    public List<CourtSearchDTO> getAllCourtSearches();
    public CourtSearchDTO getCourtSearchesWithId(int theId);
    public CourtSearchDTO saveCourtSearches(CourtSearchDTO courtSearchDTO);
}
