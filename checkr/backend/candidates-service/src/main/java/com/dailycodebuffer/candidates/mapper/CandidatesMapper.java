package com.dailycodebuffer.candidates.mapper;

import com.dailycodebuffer.candidates.dto.CandidatesDTO;
import com.dailycodebuffer.candidates.entity.Candidates;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;


public class CandidatesMapper {
    @Autowired
    private static ModelMapper modelMapper;
    static {
        modelMapper = new ModelMapper();
    }

    public static Candidates convertDtoToEntity(CandidatesDTO candidatesDTO) {
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(candidatesDTO,Candidates.class);    }

    public static CandidatesDTO convertEntityToDto(Candidates candidates){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(candidates,CandidatesDTO.class);
    }
}
