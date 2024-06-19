package com.safetrade.auth.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.safetrade.auth.models.Parceiro;

@Repository
public interface ParceiroRepository extends JpaRepository<Parceiro, Long> {
}
