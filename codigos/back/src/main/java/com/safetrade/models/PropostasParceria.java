package com.safetrade.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "propostas_parceria")
public class PropostasParceria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nomeEmpresa;

    @Column(nullable = false, unique = true)
    private String cnpj;

    @Column(nullable = false)
    private String descricao;

    @Column(nullable = false)
    private String detalhamentos;

    // Getters and Setters
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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getDetalhamentos() {
        return detalhamentos;
    }

    public void setDetalhamentos(String detalhamentos) {
        this.detalhamentos = detalhamentos;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PropostasParceria that = (PropostasParceria) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
