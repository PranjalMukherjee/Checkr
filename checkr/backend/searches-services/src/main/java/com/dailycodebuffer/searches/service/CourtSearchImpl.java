package com.dailycodebuffer.searches.service;

import com.dailycodebuffer.searches.converter.CourtSearchConverter;
import com.dailycodebuffer.searches.dto.CourtSearchDTO;
import com.dailycodebuffer.searches.entity.CourtSearch;
import com.dailycodebuffer.searches.exception.CandidateNotFoundException;
import com.dailycodebuffer.searches.exception.ServiceException;
import com.dailycodebuffer.searches.repository.CourtSearchesRepo;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;



@Service
@Slf4j
public class CourtSearchImpl implements CourtSearchService {
    private CourtSearchesRepo courtSearchesRepo;


    private CourtSearchConverter courtSearchConverter;

    @Autowired
    public CourtSearchImpl(CourtSearchesRepo courtSearchesRepo, CourtSearchConverter courtSearchConverter) {
        this.courtSearchesRepo = courtSearchesRepo;
        this.courtSearchConverter = courtSearchConverter;
    }


    public List<CourtSearchDTO> getAllCourtSearches() {

        List<CourtSearch> courtSearchList = courtSearchesRepo.findAll();
        log.debug("Number of CourtSearch entities retrieved: {}", courtSearchList.size());
        return courtSearchList.stream()
                .map(courtSearchConverter::convertEntityToDTO)
                .collect(Collectors.toList());

    }


    public CourtSearchDTO getCourtSearchesWithId(int courtSearchesId) {

            CourtSearch courtSearch = courtSearchesRepo.findById(courtSearchesId)
                    .orElseThrow(() -> new CandidateNotFoundException("Court Searches Not Found By this id : " + courtSearchesId));
            return courtSearchConverter.convertEntityToDTO(courtSearch);

    }


    public CourtSearchDTO saveCourtSearches(CourtSearchDTO courtSearchDTO) {


        CourtSearch courtSearch = courtSearchConverter.convertDTOToEntity(courtSearchDTO);
        CourtSearch savedSearch = courtSearchesRepo.save(courtSearch);
        return courtSearchConverter.convertEntityToDTO(savedSearch);

    }

}
