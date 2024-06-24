package com.safetrade.repositories;

import com.safetrade.models.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuarios, Long> {
    Optional<Usuarios> findByEmail(String email);
    Optional<Usuarios> findByCpf(String cpf);
    boolean existsByEmailOrCpf(String email, String cpf);
}
