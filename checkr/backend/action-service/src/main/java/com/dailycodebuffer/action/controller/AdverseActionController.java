package com.dailycodebuffer.action.controller;


import com.dailycodebuffer.action.dto.AdverseActionsDTO;
import com.dailycodebuffer.action.entity.AdverseActions;
import com.dailycodebuffer.action.exceptions.AdverseActionNotFoundException;
import com.dailycodebuffer.action.service.AdverseActionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@RestController
@RequestMapping("/action")
@CrossOrigin(origins = {"http://localhost:3001","https://bc104-fe.fe-assignment.tk"},methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.PATCH})
public class AdverseActionController {
    @Autowired
    private AdverseActionService adverseActionService;
    @GetMapping("/")
    public List<AdverseActions> getListOfAdverseActions(){
        return adverseActionService.getAllAdverseActions();
    }

    @GetMapping("/{id}")
    public AdverseActions getAdverseActionById(@PathVariable int id){
        return adverseActionService.getAdverseActionById(id);
    }

    @PostMapping("/")
    public AdverseActionsDTO addAdverseAction(@RequestBody AdverseActionsDTO adverseActionsDTO){
        adverseActionsDTO.setId(0);
        return adverseActionService.saveAdverseAction(adverseActionsDTO);
    }

    @PutMapping("/")
    public AdverseActionsDTO updateAdverseActions(@RequestBody AdverseActionsDTO adverseActionsDTO){
        return adverseActionService.saveAdverseAction(adverseActionsDTO);
    }

    @DeleteMapping("/{id}")
    public String deleteAdverseAction(@PathVariable int id){
        if(adverseActionService.getAdverseActionById(id) == null){
            throw new AdverseActionNotFoundException("Adverse Action of Id "+id+" doesn't exist");
        }
        adverseActionService.deleteAdverseAction(id);
        return "deleted the adverse action of id - "+id;
    }




}
