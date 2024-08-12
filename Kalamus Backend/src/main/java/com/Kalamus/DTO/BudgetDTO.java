package com.Kalamus.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BudgetDTO {
    private String period;
    private String name;
    private int budgetValue;
    private boolean isActive;
    private int sales;
    private int execution;

}
