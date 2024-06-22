package com.safetrade.services;

import com.safetrade.models.Anuncio;
import com.safetrade.repositories.AnuncioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnuncioService {
    @Autowired
    private AnuncioRepository anuncioRepository;

    public Anuncio save(Anuncio anuncio) {
        return anuncioRepository.save(anuncio);
    }

    public List<Anuncio> findByUsuarioId(Long usuarioId) {
        return anuncioRepository.findByUsuarioId(usuarioId);
    }

    public void delete(Long id) {
        anuncioRepository.deleteById(id);
    }

    public Anuncio update(Anuncio anuncio) {
        return anuncioRepository.save(anuncio);
    }

    public Anuncio findById(Long id) {
        return anuncioRepository.findById(id).orElse(null);
    }
}
