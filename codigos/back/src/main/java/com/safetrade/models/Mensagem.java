package com.safetrade.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "mensagens")
public class Mensagem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "troca_id", nullable = false)
    private Troca troca;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "remetente_id", nullable = false)
    private Usuarios remetente;

    @Column(nullable = false)
    private String conteudo;

    @Column(nullable = false)
    private Long timestamp;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Troca getTroca() {
        return troca;
    }

    public void setTroca(Troca troca) {
        this.troca = troca;
    }

    public Usuarios getRemetente() {
        return remetente;
    }

    public void setRemetente(Usuarios remetente) {
        this.remetente = remetente;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public Long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Long timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Mensagem mensagem = (Mensagem) o;
        return Objects.equals(id, mensagem.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
