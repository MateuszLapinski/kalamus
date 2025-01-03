package com.Kalamus.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@Service
public class ViewService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<Map<String,Object>> getViewData(String viewName){
        String sql="SELECT * FROM " + viewName;
        return jdbcTemplate.queryForList(sql);
    }
    public List<Map<String,Object>> getOrderedView(String period){
        MapSqlParameterSource params = new MapSqlParameterSource();
        String sql="SELECT * FROM PH_TEST.dbo.v_sprzedaz_ph_odbiorca_TW_grupa WHERE okres_sprz = :period ORDER BY okres_sprz, name, odbiorca";
        params.addValue("period", period);
        return namedParameterJdbcTemplate.queryForList(sql,params);
    }

    public List<Map<String,Object>> getCurrentBudget(){

        String sql="SELECT * FROM PH_TEST.dbo.v_wykonanie_budżetu where okres=" + getCurrentPeriod();
        return jdbcTemplate.queryForList(sql);
    }

    public List<Map<String, Object>> getBudgetForPeriod(String period) {
        String sql = "SELECT * FROM PH_TEST.dbo.v_wykonanie_budżetu WHERE okres = :period";
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("period", period);
        return namedParameterJdbcTemplate.queryForList(sql, params);
    }
    public static String getCurrentPeriod(){
        LocalDate localDate= LocalDate.now();
        DateTimeFormatter dateTimeFormatter= DateTimeFormatter.ofPattern("yyyy.MM");
        return localDate.format(dateTimeFormatter);
    }

    public List<Map<String, Object>> getRaportedInfo(String period, String overGroup, String recipent) {
        StringBuilder sql = new StringBuilder("SELECT * FROM PH_TEST.dbo.v_sprzedaz_ph_odbiorca_TW_grupa WHERE 1=1");
        MapSqlParameterSource params = new MapSqlParameterSource();

        if (period != null && !period.isEmpty()) {
            sql.append(" AND Okres_sprz = :period");
            params.addValue("period", period);
        }

        if (overGroup != null && !overGroup.isEmpty()) {
            sql.append(" AND nazwa_nadgrupy = :overgroup");
            params.addValue("overgroup", overGroup);
        }

        if (recipent != null && !recipent.isEmpty()) {
            sql.append(" AND odbiorca  = :recipent");
            params.addValue("recipent", recipent);
        }

        sql.append(" ORDER BY okres_sprz, name, odbiorca");


        System.out.println("Executing SQL: " + sql.toString());
        System.out.println("With parameters: " + params.getValues().toString());

        return namedParameterJdbcTemplate.queryForList(sql.toString(), params);
    }

    public List<Map<String,Object>> getAllGoodsForPeriod(@Param ("period") String period){
        String sql="SELECT * FROM PH_TEST.dbo.v_sprzedaz_towar_okres where Okres_sprz=" + period + " ORDER BY kod";
        return jdbcTemplate.queryForList(sql);
    }


   public List<Map<String,Object>> getGoodsForPeriodAndRecipent(String period, String recipent) {

       StringBuilder sql = new StringBuilder("SELECT * FROM PH_TEST.dbo.v_sprzedaz_okres_odbiorca_towar where 1=1");
       MapSqlParameterSource params = new MapSqlParameterSource();
       if (period != null && !period.isEmpty()) {
           sql.append(" AND Okres_sprz = :period");
           params.addValue("period" , period);
       }

       if (recipent != null && !recipent.isEmpty()) {
           sql.append(" AND Odbiorca LIKE :recipent");
           params.addValue("recipent", "%" + recipent + "%");
       }

       sql.append(" ORDER BY kod, okres_sprz");
       System.out.println("Executing SQL: " + sql.toString());
       return namedParameterJdbcTemplate.queryForList(sql.toString(), params);

   }

   public List<Map<String,Object>> getInvoicesForPeriodAndPH(String period, String name) {
       StringBuilder sql = new StringBuilder("SELECT * FROM PH_TEST.dbo.v_faktury where 1=1");
       MapSqlParameterSource params = new MapSqlParameterSource();

       if (period != null && !period.isEmpty()) {
           sql.append(" AND Okres_sprz = :period");
           params.addValue("period" , period);
       }

       if (name != null && !name.isEmpty()) {
           sql.append(" AND name LIKE :name");
           params.addValue("name", "%" + name + "%");
       }

       sql.append(" ORDER BY Okres_sprz");
       System.out.println("Executing SQL: " + sql.toString());
       return namedParameterJdbcTemplate.queryForList(sql.toString(), params);
   }
}
