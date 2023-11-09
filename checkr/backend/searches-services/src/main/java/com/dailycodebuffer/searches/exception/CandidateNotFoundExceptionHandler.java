package com.dailycodebuffer.searches.exception;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CandidateNotFoundExceptionHandler {
    @ExceptionHandler
    public ResponseEntity<CandidateNotFoundExceptionBody> handleException(CandidateNotFoundException e) {
        CandidateNotFoundExceptionBody elementErrorResponse = new CandidateNotFoundExceptionBody(HttpStatus.NOT_FOUND.value(),
                e.getMessage(), System.currentTimeMillis());
        return new ResponseEntity<>(elementErrorResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<CandidateNotFoundExceptionBody> handleBadException(ServiceException e) {
        CandidateNotFoundExceptionBody elementErrorResponse = new CandidateNotFoundExceptionBody(HttpStatus.BAD_REQUEST.value(),
                e.getMessage(), System.currentTimeMillis());
        return new ResponseEntity<>(elementErrorResponse, HttpStatus.BAD_REQUEST);
    }
}

