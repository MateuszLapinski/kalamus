package com.Kalamus.Controller;

import com.Kalamus.DTO.BudgetDTO;
import com.Kalamus.Entity.Budget;
import com.Kalamus.Service.BudgetService;
import com.Kalamus.Service.ViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/budget")
public class BudgetController {

    @Autowired
    BudgetService budgetService;

    @GetMapping("/getAll")
    public List<Budget> findAll() {
        return budgetService.findAll();
    }

    @GetMapping("/allBudgetdto")
    public List<BudgetDTO> allBudgetRealisation() {
        return budgetService.allBudgetRealisation();
    }
}


