package com.dailycodebuffer.reports.dto;

import com.dailycodebuffer.reports.enums.Adjudication;
import com.dailycodebuffer.reports.enums.Status;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Builder;


import java.time.LocalDateTime;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReportDTO {

    private int id;
    private Status status;
    private Adjudication adjudication;

    private String packageName;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime completedDate;
    private String turnAroundTime;
    private int candidateId;
}
