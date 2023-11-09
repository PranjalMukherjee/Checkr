package com.dailycodebuffer.reports.entity;



import com.dailycodebuffer.reports.enums.Adjudication;
import com.dailycodebuffer.reports.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Enumerated;
import javax.persistence.EnumType;
import java.time.LocalDateTime;

@Entity
@Table(name = "reports")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @Enumerated(EnumType.STRING)
    @Column(name = "adjudication")
    private Adjudication adjudication;

    @Column(name = "package")
    private String packageName;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "completed_date")
    private LocalDateTime completedDate;

    @Column(name = "turn_around_time", length = 30)
    private String turnAroundTime;
    @Column(name = "candidate_id")
    private int candidateId;

}
