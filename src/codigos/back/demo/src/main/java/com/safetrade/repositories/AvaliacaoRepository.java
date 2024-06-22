package com.safetrade.repositories;

import com.safetrade.models.Avaliacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long> {
    List<Avaliacao> findByUsuarioId(Long usuarioId);

    @Query("SELECT COUNT(a) FROM Avaliacao a WHERE a.concluida = true")
    long countCompletedExchanges();

    @Query("SELECT COUNT(a) FROM Avaliacao a")
    long countTotalExchanges();
}
