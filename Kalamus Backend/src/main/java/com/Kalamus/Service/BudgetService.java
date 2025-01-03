package com.Kalamus.Service;

import com.Kalamus.Repository.BudgetRepository;
import com.Kalamus.DTO.BudgetDTO;
import com.Kalamus.Entity.Budget;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Service
public class BudgetService {

    @Autowired
    BudgetRepository budgetRepository;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Budget> findAll(){
        return budgetRepository.findAll();
    }

    public void save(Budget entity) {
        budgetRepository.save(entity);
    }

    public void update(Budget entity) {
        budgetRepository.save(entity);
    }

    public void deleteById(int id) {
        budgetRepository.deleteById(id);
    }
    public List<BudgetDTO> allBudgetRealisation() {
        String sql="SELECT okres AS period, name, budzet AS budgetValue, aktywny AS isActive, Sprzedaz AS sales, Wykonanie AS execution FROM PH_TEST.dbo.v_wykonanie_budżetu";
        return jdbcTemplate.query(sql,new BudgetDTORowMapper());
    }

    public List<BudgetDTO> budgetForPeriod(String okres){
        String sql="SELECT okres AS period, name, budzet AS budgetValue, aktywny AS isActive, Sprzedaz AS sales, Wykonanie AS execution " +
                "FROM PH_TEST.dbo.v_wykonanie_budżetu" +
                " WHERE okres LIKE '%"+okres+"%'";
        return jdbcTemplate.query(sql,new BudgetDTORowMapper());
    }


  private static class BudgetDTORowMapper implements RowMapper<BudgetDTO> {
        @Override
        public BudgetDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
            BudgetDTO dto = new BudgetDTO();
            dto.setPeriod(rs.getString("period"));
            dto.setName(rs.getString("name"));
            dto.setBudgetValue(rs.getInt("budgetValue"));
            dto.setActive(rs.getBoolean("isActive"));
            dto.setSales(rs.getInt("sales"));
            dto.setExecution(rs.getDouble("execution"));
            return dto;

        }
    }
}
