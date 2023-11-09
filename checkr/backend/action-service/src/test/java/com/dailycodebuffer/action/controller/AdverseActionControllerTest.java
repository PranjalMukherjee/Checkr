package com.dailycodebuffer.action.controller;


import com.dailycodebuffer.action.dto.AdverseActionsDTO;
import com.dailycodebuffer.action.entity.AdverseActions;
import com.dailycodebuffer.action.enums.Status;
import com.dailycodebuffer.action.service.AdverseActionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;


class AdverseActionControllerTest {
    @Mock
    private AdverseActionService adverseActionService;

    @InjectMocks
    private AdverseActionController adverseActionController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }
    @Test
     void givenAdverseActionsInService_whenGetListOfAdverseActions_thenReturnListOfAdverseActions(){
        // Given
        List<AdverseActions> adverseActionsList = new ArrayList<>();
        adverseActionsList.add(new AdverseActions(1, "John Smith", Status.SCHEDULED,new Date(2022, 2, 22),new Date(2022, 2, 22),1));
        adverseActionsList.add(new AdverseActions(2, "Smith", Status.SCHEDULED,new Date(2022, 2, 22),new Date(2022, 2, 22),1));

        when(adverseActionService.getAllAdverseActions()).thenReturn(adverseActionsList);

        // When
        List<AdverseActions> result = adverseActionController.getListOfAdverseActions();

        // Then
        assertEquals(adverseActionsList, result);
        verify(adverseActionService, times(1)).getAllAdverseActions();
    }
    @Test
    void givenValidAdverseActionId_whenGetAdverseActionById_thenReturnAdverseAction(){
        // Given
        int id = 1;
        AdverseActions adverseAction = new AdverseActions(id, "John Smith", Status.SCHEDULED,new Date(2022, 2, 22),new Date(2022, 2, 22),1);

        when(adverseActionService.getAdverseActionById(id)).thenReturn(adverseAction);

        // When
        AdverseActions result = adverseActionController.getAdverseActionById(id);

        // Then
        assertEquals(adverseAction, result);
        verify(adverseActionService, times(1)).getAdverseActionById(id);
    }
    @Test
     void givenValidAdverseAction_whenAddAdverseAction_thenReturnSavedAdverseAction(){
        // Given
        AdverseActionsDTO adverseActionsDTO = new AdverseActionsDTO(0, "John Smith", Status.SCHEDULED,new Date(2022, 2, 22),new Date(2022, 2, 22),1);

        when(adverseActionService.saveAdverseAction(adverseActionsDTO)).thenReturn(adverseActionsDTO);

        // When
        AdverseActionsDTO result = adverseActionController.addAdverseAction(adverseActionsDTO);

        // Then
        assertEquals(adverseActionsDTO, result);
        verify(adverseActionService, times(1)).saveAdverseAction(adverseActionsDTO);
    }
    @Test
     void givenValidAdverseAction_whenUpdateAdverseAction_thenReturnUpdatedAdverseAction(){
        // Given
        AdverseActionsDTO adverseActionsDTO = new AdverseActionsDTO(1, "John Smith", Status.SCHEDULED,new Date(2022, 2, 22),new Date(2022, 2, 22),1);

        when(adverseActionService.saveAdverseAction(adverseActionsDTO)).thenReturn(adverseActionsDTO);

        // When
        AdverseActionsDTO result = adverseActionController.updateAdverseActions(adverseActionsDTO);

        // Then
        assertEquals(adverseActionsDTO, result);
        verify(adverseActionService, times(1)).saveAdverseAction(adverseActionsDTO);

    }
    @Test
    void givenNonexistentAdverseActionId_whenDeleteAdverseAction_thenThrowException(){
        // Act
        assertThrows(RuntimeException.class, () -> {
            adverseActionController.deleteAdverseAction(1);
        });    }
    @Test
     void givenAdverseActionId_whenDeleteAdverseActionById_thenAdverseActionIsDeleted(){
        //Given
        AdverseActions adverseActions = new AdverseActions(1, "John Smith", Status.SCHEDULED,new Date(2022, 2, 22),new Date(2022, 2, 22),1);
        String expected = "deleted the adverse action of id - 1";

        //when
        when(adverseActionService.getAdverseActionById(1)).thenReturn(adverseActions);

        //Act
        String actual = adverseActionController.deleteAdverseAction(1);

        //verify
        assertEquals(expected, actual);
        verify(adverseActionService, times(1)).deleteAdverseAction(1);
    }

}
