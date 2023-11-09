package com.dailycodebuffer.action.mapper;

import com.dailycodebuffer.action.dto.AdverseActionsDTO;
import com.dailycodebuffer.action.entity.AdverseActions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;


public class AdverseActionsMapper {
    @Autowired
    private static ModelMapper modelMapper;
    static {
        modelMapper = new ModelMapper();
    }

    public static AdverseActions convertDtoToEntity(AdverseActionsDTO adverseActionsDTO) {
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(adverseActionsDTO,AdverseActions.class);    }

    public static AdverseActionsDTO convertEntityToDto(AdverseActions adverseActions){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(adverseActions,AdverseActionsDTO.class);
    }
}
