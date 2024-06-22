package com.safetrade.models;

import javax.persistence.*;

@Entity
public class Parceiro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeEmpresa;
    private String cnpj;
    private String propostaParceria;

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeEmpresa() {
        return nomeEmpresa;
    }

    public void setNomeEmpresa(String nomeEmpresa) {
        this.nomeEmpresa = nomeEmpresa;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getPropostaParceria() {
        return propostaParceria;
    }

    public void setPropostaParceria(String propostaParceria) {
        this.propostaParceria = propostaParceria;
    }
}
