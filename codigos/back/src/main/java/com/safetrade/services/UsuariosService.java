package com.safetrade.services;

import com.safetrade.models.Usuarios;
import com.safetrade.repositories.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuariosService {

    @Autowired
    private UsuariosRepository usuariosRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Usuarios registerUsuario(Usuarios usuario) {
        usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
        return usuariosRepository.save(usuario);
    }

    public Optional<Usuarios> findByEmail(String email) {
        return usuariosRepository.findByEmail(email);
    }

    public Optional<Usuarios> findByCpf(String cpf) {
        return usuariosRepository.findByCpf(cpf);
    }

    public boolean checkIfUsuarioExists(String email, String cpf) {
        return usuariosRepository.findByEmail(email).isPresent() || usuariosRepository.findByCpf(cpf).isPresent();
    }
}
