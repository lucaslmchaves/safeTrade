package com.safetrade.services;

import com.safetrade.models.Troca;
import com.safetrade.repositories.TrocaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrocaService {

    @Autowired
    private TrocaRepository trocaRepository;

    public Troca createTroca(Troca troca) {
        return trocaRepository.save(troca);
    }

    public List<Troca> getAllTrocas() {
        return trocaRepository.findAll();
    }

    public Optional<Troca> getTrocaById(Long id) {
        return trocaRepository.findById(id);
    }

    public Troca updateTroca(Troca troca) {
        return trocaRepository.save(troca);
    }

    public void deleteTroca(Long id) {
        trocaRepository.deleteById(id);
    }
}
