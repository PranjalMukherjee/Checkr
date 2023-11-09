package com.dailycodebuffer.action.service;


import com.dailycodebuffer.action.dto.AdverseActionsDTO;
import com.dailycodebuffer.action.entity.AdverseActions;

import java.util.List;

public interface AdverseActionService {
    public List<AdverseActions> getAllAdverseActions();

    AdverseActionsDTO saveAdverseAction(AdverseActionsDTO adverseActionsDTO);

    AdverseActions getAdverseActionById(int id);

    void deleteAdverseAction(int id);
}
