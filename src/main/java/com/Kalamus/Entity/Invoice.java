package com.Kalamus.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

@Table(name = "Faktury")
public class Invoice {
    @Column(name = "nr_faktury")
    private int number;

    @Column(name = "data_wyst")
    private String occurenceDate;

    @Column(name = "okres_sprz")
    private String salesPeriod
    ;

    @Column(name = "nabywca")
    private double purchaser;

    @Column(name = "pozycja")
    private byte position;

    @Column(name = "kod_towaru")
    private int barCode;

    @Column(name = "nazwa_towaru")
    private int productName;

    @Column(name = "ilosc")
    private int quantity;

    @Column(name = "jm")
    private int jm;

    @Column(name = "cena")
    private float price;

    @Column(name = "wartosc")
    private float value;

    @Column(name = "splacona")
    private boolean status;
}
