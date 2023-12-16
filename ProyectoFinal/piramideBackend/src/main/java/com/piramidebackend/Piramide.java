package com.piramidebackend;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Piramide {
    @Id @GeneratedValue
    private Long id;
    private int altura;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Coordenada> coordenadas;

    public int getAltura() {
        return altura;
    }

    public void setAltura(int altura) {
        this.altura = altura;
    }

    public List<Coordenada> getCoordenadas() {
        return coordenadas;
    }

    public void setCoordenadas(List<Coordenada> coordenadas) {
        this.coordenadas = coordenadas;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}