package com.safetrade.models;

import javax.persistence.*;
import java.util.Objects;
import lombok.AccessLevel;
import lombok.Setter;
import lombok.Data;
import lombok.ToString;


@Data
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
