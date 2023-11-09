package com.dailycodebuffer.action.service;


import com.dailycodebuffer.action.dao.AdverseActionRepository;
import com.dailycodebuffer.action.dto.AdverseActionsDTO;
import com.dailycodebuffer.action.entity.AdverseActions;
import com.dailycodebuffer.action.exceptions.AdverseActionNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

import static com.dailycodebuffer.action.mapper.AdverseActionsMapper.convertDtoToEntity;

@Service
public class AdverseActionServiceImpl implements AdverseActionService{
    @Autowired
    private AdverseActionRepository adverseActionRepository;
    @Override
    @Transactional
    public List<AdverseActions> getAllAdverseActions() {
        return adverseActionRepository.findAll();
    }

    @Override
    public AdverseActionsDTO saveAdverseAction(AdverseActionsDTO adverseActionsDTO) {
        adverseActionRepository.save(convertDtoToEntity(adverseActionsDTO));
        return adverseActionsDTO;
    }

    @Override
    public AdverseActions getAdverseActionById(int id) {
        Optional<AdverseActions> adverseAction1 = adverseActionRepository.findById(id);
        AdverseActions adverseAction = null;
        if(adverseAction1.isPresent()){
            adverseAction = adverseAction1.get();
        }
        else {
            throw new AdverseActionNotFoundException("Did not found Adverse Action with Id - "+id);
        }
        return adverseAction;
    }

    @Override
    public void deleteAdverseAction(int id) {
        adverseActionRepository.deleteById(id);
    }
}
