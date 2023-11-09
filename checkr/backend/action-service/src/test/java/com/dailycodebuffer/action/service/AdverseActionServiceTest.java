package com.dailycodebuffer.action.service;

import com.dailycodebuffer.action.dto.AdverseActionsDTO;
import com.dailycodebuffer.action.dao.AdverseActionRepository;
import com.dailycodebuffer.action.entity.AdverseActions;
import com.dailycodebuffer.action.exceptions.AdverseActionNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.any;

class AdverseActionServiceTest {

    @Mock
    private AdverseActionRepository adverseActionRepository;
    @InjectMocks
    private AdverseActionServiceImpl adverseActionService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }
    @Test
    void givenAdverseActionsInDatabase_whenFindAllAdverseAction_thenReturnAllAdverseActions(){
        //Given
        List<AdverseActions> adverseActions = new ArrayList<>();
        adverseActions.add(new AdverseActions());
        adverseActions.add(new AdverseActions());

        //when
        when(adverseActionRepository.findAll()).thenReturn(adverseActions);

        //Act
        List<AdverseActions> adverseActions1 = adverseActionService.getAllAdverseActions();

        //Verify
        assertEquals(adverseActions1, adverseActions);
        assertEquals(2, adverseActions1.size());
        verify(adverseActionRepository, times(1)).findAll();
    }

    @Test
    void givenAdverseActionId_whenFindAdverseActionById_thenAdverseActionsIsReturned(){
        //Given
        AdverseActions adverseActions = new AdverseActions();

        //when
        when(adverseActionRepository.findById(1)).thenReturn(Optional.of(adverseActions));

        //Act
        AdverseActions adverseActions1 = adverseActionService.getAdverseActionById(1);
        
        //verify
        assertEquals(adverseActions1, adverseActions);
        verify(adverseActionRepository, times(1)).findById(1);
    }
    @Test
    public void testGetAdverseActionByIdNotFound() {
        int nonExistentId = 123; // An ID that is not in the database
        when(adverseActionRepository.findById(nonExistentId)).thenReturn(Optional.empty());

        assertThrows(AdverseActionNotFoundException.class, () -> {
            adverseActionService.getAdverseActionById(nonExistentId);
        });
    }
    @Test
    void givenAdverseAction_whenSaveAdverseAction_thenAdverseActionIsSaved(){
        //Given
        AdverseActionsDTO adverseActionsDTO = new AdverseActionsDTO();
        adverseActionsDTO.setId(0);

        AdverseActions adverseActions = new AdverseActions();
        adverseActions.setId(0);

        //when
        when(adverseActionRepository.save(any(AdverseActions.class))).thenReturn(adverseActions);

        //Act
        AdverseActionsDTO savedAdverseActionDT0 = adverseActionService.saveAdverseAction(adverseActionsDTO);

        //verify
        assertEquals(savedAdverseActionDT0, adverseActionsDTO);
    }
    @Test
    void givenAdverseActionId_whenDeleteAdverseActionId_thenDeleteAdverseAction(){
        //Given
        AdverseActions adverseActions = new AdverseActions();
        adverseActions.setId(1);

        //Act
        adverseActionService.deleteAdverseAction(1);

        //verify
        verify(adverseActionRepository, times(1)).deleteById(1);
    }
}
