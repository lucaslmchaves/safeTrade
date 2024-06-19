package com.safetrade.auth.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.safetrade.auth.models.Anuncio;

@Repository
public interface AnuncioRepository extends JpaRepository<Anuncio, Long> {
}
