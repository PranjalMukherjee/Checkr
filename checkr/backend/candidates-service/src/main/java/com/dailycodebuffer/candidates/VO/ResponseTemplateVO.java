package com.dailycodebuffer.candidates.VO;

import com.dailycodebuffer.candidates.entity.Candidates;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseTemplateVO {

    private Candidates candidates;
    private Report report;
}
