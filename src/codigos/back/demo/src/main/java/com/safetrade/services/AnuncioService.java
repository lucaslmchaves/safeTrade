package com.safetrade.services;

import com.safetrade.models.Anuncio;
import com.safetrade.models.Usuarios;
import com.safetrade.repositories.AnuncioRepository;
import com.safetrade.repositories.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnuncioService {

    @Autowired
    private AnuncioRepository anuncioRepository;

    @Autowired
    private UsuariosRepository usuariosRepository;

    public Anuncio createAnuncio(Anuncio anuncio, Long usuarioId) {
        Optional<Usuarios> usuario = usuariosRepository.findById(usuarioId);
        if (usuario.isPresent()) {
            anuncio.setUsuario(usuario.get());
            return anuncioRepository.save(anuncio);
        }
        throw new RuntimeException("User not found");
    }

    public List<Anuncio> getAnunciosByUsuarioId(Long usuarioId) {
        return anuncioRepository.findByUsuarioId(usuarioId);
    }

    public Optional<Anuncio> getAnuncioById(Long id) {
        return anuncioRepository.findById(id);
    }

    public Anuncio updateAnuncio(Anuncio anuncio) {
        return anuncioRepository.save(anuncio);
    }

    public void deleteAnuncio(Long id) {
        anuncioRepository.deleteById(id);
    }
}
