package com.dailycodebuffer.candidates.service;

import com.dailycodebuffer.candidates.VO.Report;
import com.dailycodebuffer.candidates.VO.ResponseTemplateVO;
import com.dailycodebuffer.candidates.dao.CandidatesRepository;
import com.dailycodebuffer.candidates.dto.CandidatesDTO;
import com.dailycodebuffer.candidates.entity.Candidates;
import com.dailycodebuffer.candidates.exceptions.CandidateNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static com.dailycodebuffer.candidates.mapper.CandidatesMapper.convertDtoToEntity;

@Service
public class CandidatesService {

    @Autowired
    private CandidatesRepository candidatesRepository;
    @Autowired
    private RestTemplate restTemplate;

    public List<Candidates> getAllCandidates() {
        return candidatesRepository.findAll();
    }

    public Optional<Candidates> getCandidatesById(int id) {
        return candidatesRepository.findById(id);
    }

    @Transactional
    public Candidates findCandidateById(int candidateId) {
        Optional<Candidates> candidates = candidatesRepository.findById(candidateId);
        Candidates candidates1 = null;
        if (candidates.isPresent()) {
            candidates1 = candidates.get();
        } else {
            throw new CandidateNotFoundException("Did not find Candidate id - " + candidateId);
        }
        return candidates1;
    }


    public Candidates saveCandidate(Candidates candidate) {
        return candidatesRepository.save(candidate);
    }

    public CandidatesDTO saveCandidates(CandidatesDTO candidatesDTO) {
        candidatesRepository.save(convertDtoToEntity(candidatesDTO));
        return candidatesDTO;
    }

    public List<ResponseTemplateVO> getAllCandidatesWithReports(int offset, int limit) {
        List<ResponseTemplateVO> result = new ArrayList<>();
        // Fetch candidates with pagination
        Pageable pageable = PageRequest.of(offset / limit, limit);
        Page<Candidates> candidatePage = candidatesRepository.findAll(pageable);
        List<Candidates> candidatesList = candidatePage.getContent(); // You need to implement this method

        for (Candidates candidate : candidatesList) {
            ResponseTemplateVO vo = new ResponseTemplateVO();
            Report report = restTemplate.getForObject("http://REPORTS-SERVICE/reports/" + candidate.getId(), Report.class);

            vo.setCandidates(candidate);
            vo.setReport(report);

            result.add(vo);
        }

        return result;
    }
}
