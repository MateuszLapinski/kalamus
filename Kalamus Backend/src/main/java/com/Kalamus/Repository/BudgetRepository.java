package com.Kalamus.Repository;

import com.Kalamus.Entity.Budget;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Integer> {
    @Query(value="SELECT okres,name ,budzet,aktywny,Sprzedaz ,Wykonanie FROM PH_TEST.dbo.v_wykonanie_budżetu", nativeQuery=true)
    List<Budget> allBudgetRealisation();
}
