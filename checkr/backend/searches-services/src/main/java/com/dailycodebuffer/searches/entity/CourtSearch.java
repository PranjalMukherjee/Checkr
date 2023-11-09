package com.dailycodebuffer.searches.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "court_search")
public class CourtSearch {
    public enum SearchStatus{
        CLEAR,
        CONSIDER
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "candidate_id")
    private int candidateId;
    @Enumerated(EnumType.STRING)
    @Column(name = "ssn_verification_status")
    private SearchStatus ssnVerification;
    @Enumerated(EnumType.STRING)
    @Column(name = "sex_offender_status")
    private SearchStatus sexOffender;
    @Enumerated(EnumType.STRING)
    @Column(name = "global_watchlist_status")
    private SearchStatus globalWatchlist;
    @Enumerated(EnumType.STRING)
    @Column(name = "federal_criminal_status")
    private SearchStatus federalCriminal;
    @Enumerated(EnumType.STRING)
    @Column(name = "county_criminal_status")
    private SearchStatus countyCriminal;
    @Column(name = "ssn_verification_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date ssnverificationDate;
    @Column(name = "sex_offender_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date sexOffenderDate;
    @Column(name = "global_watchlist_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date globalWatchlistDate;
    @Column(name = "federal_criminal_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date federalCriminalDate;
    @Column(name="county_criminal_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date countyCriminalDate;

}
