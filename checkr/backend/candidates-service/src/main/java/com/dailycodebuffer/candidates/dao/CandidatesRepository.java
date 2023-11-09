package com.dailycodebuffer.candidates.dao;

import com.dailycodebuffer.candidates.entity.Candidates;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidatesRepository extends JpaRepository<Candidates, Integer> {
    Page<Candidates> findAll(Pageable pageable);
}