package com.safetrade.models;

import javax.persistence.*;

@Entity
public class Avaliacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String comentario;
    private NivelAvaliacao nivel;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    public enum NivelAvaliacao {
        BOM,
        REGULAR,
        RUIM
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public NivelAvaliacao getNivel() {
        return nivel;
    }

    public void setNivel(NivelAvaliacao nivel) {
        this.nivel = nivel;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
