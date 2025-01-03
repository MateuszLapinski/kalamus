package com.Kalamus.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "towar")
public class Product {
    @Id
    @Column(name="id")
    private int id;

    @Column(name="kod")
    private String shortcut;

    @Column(name="jm")
    private String jm;

    @Column(name="Towary Handlowe")
    private String kind;
}