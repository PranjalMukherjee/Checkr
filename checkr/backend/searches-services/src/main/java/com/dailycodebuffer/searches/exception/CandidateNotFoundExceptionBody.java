package com.dailycodebuffer.searches.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CandidateNotFoundExceptionBody {
    private int status;
    private String message;
    private long timeStamp;
}

