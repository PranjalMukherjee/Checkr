package com.dailycodebuffer.action.entity;


import com.dailycodebuffer.action.enums.Status;
import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class AdverseActionsTest {

   @Test
    void givenEmptyConstructor_whenCreateAdverseAction_thenAdverseActionIsNotNull(){
       AdverseActions adverseActions = new AdverseActions();
       assertNotNull(adverseActions);
   }
   @Test
    void givenArgsConstructor_whenCreateAdverseActionWithParameters_thenAdverseActionFieldsAreSet(){
       Date preNoticeDate = new Date(2022, 2, 22);
       Date postNoticeDate = new Date(2022, 2, 22);
       AdverseActions adverseActions = new AdverseActions(1,"John Smith", Status.SCHEDULED,preNoticeDate,postNoticeDate,1);

       // Verify
       assertEquals(1, adverseActions.getId());
       assertEquals("John Smith", adverseActions.getName());
       assertEquals(Status.SCHEDULED, adverseActions.getStatus());
       assertEquals(preNoticeDate, adverseActions.getPreNoticeDate());
       assertEquals(postNoticeDate, adverseActions.getPostNoticeDate());
       assertEquals(1, adverseActions.getCandidateId());
   }
   @Test
   void givenAdverseActionId_whenSetId_thenAdverseActionIdIsSet(){
      //given
      AdverseActions adverseActions = new AdverseActions();
      adverseActions.setId(1);

      //verify
      assertEquals(1,adverseActions.getId());
   }
   @Test
   void givenAdverseActionName_whenGetAdverseActionName_thenReturnAdverseActionName(){
      //Given
      AdverseActions adverseActions = new AdverseActions();
      adverseActions.setName("John Smith");

      //Verify
      assertEquals("John Smith",adverseActions.getName());
   }
   @Test
   void givenAdverseActionStatus_whenGetStatus_thenReturnStatus(){
      //Given
      AdverseActions adverseActions = new AdverseActions();
      adverseActions.setStatus(Status.SCHEDULED);

      //Verify
      assertEquals(Status.SCHEDULED,adverseActions.getStatus());
   }
   @Test
   void givenPreNoticeDate_whenGetPreNoticeDate_thenReturnPreNoticeDate(){
      //Given
      AdverseActions adverseActions = new AdverseActions();
      Date preNoticeDate = new Date(2022, 2, 22);
      adverseActions.setPreNoticeDate(preNoticeDate);

      //Verify
      assertEquals(preNoticeDate, adverseActions.getPreNoticeDate());
   }
   @Test
   void givenPostNoticeDate_whenGetPostNoticeDate_thenReturnPostNoticeDate(){
      //Given
      AdverseActions adverseActions = new AdverseActions();
      Date postNoticeDate = new Date(2022, 2, 22);
      adverseActions.setPostNoticeDate(postNoticeDate);

      //Verify
      assertEquals(postNoticeDate, adverseActions.getPostNoticeDate());
   }
   @Test
   void givenCandidateId_whenGetCandidateId_thenReturnCandidateId(){
      //Given
      AdverseActions adverseActions = new AdverseActions();
      adverseActions.setCandidateId(1);

      //Verify
      assertEquals(1, adverseActions.getCandidateId());
   }
}
