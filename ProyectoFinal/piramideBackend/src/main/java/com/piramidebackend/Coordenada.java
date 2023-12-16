package com.piramidebackend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Coordenada{
    @Id @GeneratedValue
    private Long id;
    private String coordenada;
    private int peso;
    public String getCoordenada() {
        return coordenada;
    }
    public void setCoordenada(String coordenada) {
        this.coordenada = coordenada;
    }

    public int getPeso() {
        return peso;
    }

    public void setPeso(int peso) {
        this.peso = peso;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
