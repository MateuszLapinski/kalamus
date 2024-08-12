package com.Kalamus.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "budzet")
public class Budget {
    @Id
    @Column(name="id")
    private int id;

    @Column(name="okres")
    private String period;

    @Column(name="id_przedstawiciel")
    private int PHId;

    @Column(name="budzet")
    private int budgetValue;

    @Column(name="aktywny")
    private boolean isActive;




}
