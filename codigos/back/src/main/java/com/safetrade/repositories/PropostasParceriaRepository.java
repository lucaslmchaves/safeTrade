package com.safetrade.repositories;

import com.safetrade.models.PropostasParceria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PropostasParceriaRepository extends JpaRepository<PropostasParceria, Long> {
    Optional<PropostasParceria> findByCnpj(String cnpj);
}
