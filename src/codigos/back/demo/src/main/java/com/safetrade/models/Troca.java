package com.safetrade.models;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "trocas")
public class Troca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario1_id", nullable = false)
    private Usuarios usuario1;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario2_id", nullable = false)
    private Usuarios usuario2;

    @OneToMany(mappedBy = "troca", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Mensagem> mensagens;

    @Column(nullable = false)
    private String status;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuarios getUsuario1() {
        return usuario1;
    }

    public void setUsuario1(Usuarios usuario1) {
        this.usuario1 = usuario1;
    }

    public Usuarios getUsuario2() {
        return usuario2;
    }

    public void setUsuario2(Usuarios usuario2) {
        this.usuario2 = usuario2;
    }

    public List<Mensagem> getMensagens() {
        return mensagens;
    }

    public void setMensagens(List<Mensagem> mensagens) {
        this.mensagens = mensagens;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Troca troca = (Troca) o;
        return Objects.equals(id, troca.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
