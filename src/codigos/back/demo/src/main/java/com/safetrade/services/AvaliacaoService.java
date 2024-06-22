package com.safetrade.services;

import com.safetrade.models.Avaliacao;
import com.safetrade.repositories.AvaliacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvaliacaoService {
    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    public Avaliacao save(Avaliacao avaliacao) {
        return avaliacaoRepository.save(avaliacao);
    }

    public List<Avaliacao> findByUsuarioId(Long usuarioId) {
        return avaliacaoRepository.findByUsuarioId(usuarioId);
    }

    public void delete(Long id) {
        avaliacaoRepository.deleteById(id);
    }
}
