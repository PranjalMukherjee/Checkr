package com.dailycodebuffer.action.entity;

import com.dailycodebuffer.action.enums.Status;
import com.fasterxml.jackson.annotation.JsonFormat;
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
import java.util.Date;

@Entity
@Table(name = "adverse_actions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdverseActions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    private String name;
    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "pre_notice_date")
    private Date preNoticeDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "post_notice_date")
    private Date postNoticeDate;
    @Column(name = "candidate_id")
    private int candidateId;
}
