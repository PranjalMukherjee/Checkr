package com.dailycodebuffer.candidates.VO;

import com.dailycodebuffer.candidates.enums.Adjudication;
import com.dailycodebuffer.candidates.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Report {
    private int id;
    private Status status;
    private Adjudication adjudication;

    private String packageName;
    private LocalDateTime createdAt;
    private LocalDateTime completedDate;
    private String turnAroundTime;
    private int candidateId;

}
