package com.safetrade.services;

import com.safetrade.models.Usuarios;
import com.safetrade.repositories.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
        
        return Optional.ofNullable(usuariosRepository.findByEmail(email).
                orElseThrow(() -> new RuntimeException("User not found")));
    }

    public Optional<Usuarios> findByCpf(String cpf) {
        return usuariosRepository.findByCpf(cpf);
    }

    public boolean checkIfUsuarioExists(String email, String cpf) {
        return usuariosRepository.findByEmail(email).isPresent() || usuariosRepository.findByCpf(cpf).isPresent();
    }

    public Usuarios atualizacaoUsuario(String email, Usuarios atualizar) {
        Usuarios usuario = usuariosRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario not found"));
        

        usuario.setNome(atualizar.getNome());
        usuario.setEmail(atualizar.getEmail());
        usuario.setCpf(atualizar.getCpf());
        
        return usuariosRepository.save(usuario);
    }

    private String uploadFile(MultipartFile file) {
        // Lógica para fazer upload do arquivo e retornar a URL
        return "url_da_foto";
    }

    public Usuarios atualizarFotoDePerfil(String email, MultipartFile file) {
        Usuarios usuario = usuariosRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

                 // Método fictício para fazer upload do arquivo e retornar a URL
                String profilePictureUrl = uploadFile(file); 
                usuario.setProfilePictureUrl(profilePictureUrl);
                return usuariosRepository.save(usuario);
    }
    
}
