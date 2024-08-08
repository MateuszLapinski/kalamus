package com.Kalamus.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "Kontrahent")
public class Customer {
    @Id
    @Column(name="id")
    private int id;

    @Column(name = "kod_kontrahent")
    private String shortcut;

    @Column(name = "nazwa_kontrahent")
    private String name;

    @Column(name = "NIP")
    private String NIP;

    @Column(name = "miasto")
    private String city;

    @Column(name = "kod_pocztowy")
    private String postCode;

    @Column(name = "ulica")
    private String street;

    @Column(name = "telefon")
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "id_rodzaj")
    private String kind;

    @Column(name = "id_opiekun")
    private int customerManager;
}
