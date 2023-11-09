package com.dailycodebuffer.searches.converter;

import com.dailycodebuffer.searches.dto.CourtSearchDTO;
import com.dailycodebuffer.searches.entity.CourtSearch;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class CourtSearchConverter {
    private final ModelMapper modelMapper;

    public CourtSearchConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public CourtSearchDTO convertEntityToDTO(CourtSearch courtSearch) {
        return modelMapper.map(courtSearch, CourtSearchDTO.class);
    }

    public CourtSearch convertDTOToEntity(CourtSearchDTO courtSearchDTO) {
        return modelMapper.map(courtSearchDTO, CourtSearch.class);
    }
}
