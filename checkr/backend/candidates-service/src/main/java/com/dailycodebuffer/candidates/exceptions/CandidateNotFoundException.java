package com.dailycodebuffer.candidates.exceptions;

public class CandidateNotFoundException extends RuntimeException{
    public CandidateNotFoundException(String message){
        super(message);
    }
}
