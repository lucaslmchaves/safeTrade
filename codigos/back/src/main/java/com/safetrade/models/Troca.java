package com.safetrade.models;

import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Data
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
