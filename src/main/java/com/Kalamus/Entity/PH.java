package com.Kalamus.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.springframework.stereotype.Component;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Przedstawiciel")
public class PH {
    @Id
    @Column(name="id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "login")
    private String login;

    @Column(name = "region_id")
    private double region_id;

    @Column(name = "user_id")
    private int user_id;
}