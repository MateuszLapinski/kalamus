package com.Kalamus.Repository;

import com.Kalamus.Entity.PH;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PHRepository extends JpaRepository<PH, Integer> {
}
