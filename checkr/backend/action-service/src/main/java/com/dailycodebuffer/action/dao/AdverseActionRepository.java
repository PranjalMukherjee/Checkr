package com.dailycodebuffer.action.dao;

import com.dailycodebuffer.action.entity.AdverseActions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdverseActionRepository extends JpaRepository<AdverseActions,Integer> {
}
