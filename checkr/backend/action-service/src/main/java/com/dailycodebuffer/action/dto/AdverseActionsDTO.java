package com.dailycodebuffer.action.dto;

import com.dailycodebuffer.action.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdverseActionsDTO {

    private int id;
    private String name;
    private Status status;
    private Date preNoticeDate;
    private Date postNoticeDate;
    private int candidateId;
}
