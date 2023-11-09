package com.dailycodebuffer.reports.mapper;

import com.dailycodebuffer.reports.dto.ReportDTO;
import com.dailycodebuffer.reports.entity.Report;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;

public class ReportMapper {
    @Autowired
    private static ModelMapper modelMapper;
    static {
        modelMapper = new ModelMapper();
    }
    public static Report convertDtoToEntity(ReportDTO reportDTO) {
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(reportDTO,Report.class);    }

    public static ReportDTO convertEntityToDto(Report report){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(report,ReportDTO.class);
    }
}
