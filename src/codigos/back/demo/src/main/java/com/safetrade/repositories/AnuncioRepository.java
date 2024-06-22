package com.safetrade.repositories;

import com.safetrade.models.Anuncio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnuncioRepository extends JpaRepository<Anuncio, Long> {
    List<Anuncio> findByUsuarioId(Long usuarioId);

    @Query("SELECT COUNT(a) FROM Anuncio a WHERE a.aceito = true")
    long countAcceptedOffers();

    @Query("SELECT COUNT(a) FROM Anuncio a")
    long countTotalOffers();
}
