package com.dailycodebuffer.searches.repository;

import com.dailycodebuffer.searches.entity.CourtSearch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourtSearchesRepo extends JpaRepository<CourtSearch,Integer> {
}
