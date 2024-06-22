package com.safetrade.repositories;

import com.safetrade.models.Troca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrocaRepository extends JpaRepository<Troca, Long> {
}
