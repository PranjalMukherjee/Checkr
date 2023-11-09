package com.dailycodebuffer.searches.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourtSearchDTO {

    private int id;
    private String ssnVerification;
    private String sexOffender;
    private String globalWatchlist;
    private String federalCriminal;
    private String countyCriminal;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date ssnverificationDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date sexOffenderDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date globalWatchlistDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date federalCriminalDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date countyCriminalDate;
    private int candidateId;
}
