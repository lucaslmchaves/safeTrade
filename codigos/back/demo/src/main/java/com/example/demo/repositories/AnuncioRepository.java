package com.example.demo.repositories;

import com.example.demo.models.Anuncio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AnuncioRepository extends JpaRepository<Anuncio, Long> {
    @Query("SELECT COUNT(a) FROM Anuncio a")
    long countAdvertisements();
}
