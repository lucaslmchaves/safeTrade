package com.example.demo.repositories;

import com.example.demo.models.Parceiro;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParceiroRepository extends JpaRepository<Parceiro, Long> {
}
