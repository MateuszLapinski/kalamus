package com.Kalamus.DTO;

import jdk.jfr.DataAmount;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class BudgetDTO {
    private String period;
    private String name;
    private int budgetValue;
    private boolean isActive;
    private int sales;
    private double execution;

}
