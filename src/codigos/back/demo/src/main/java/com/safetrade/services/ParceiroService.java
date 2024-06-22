package com.safetrade.services;

import com.safetrade.models.Parceiro;
import com.safetrade.repositories.ParceiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParceiroService {
    @Autowired
    private ParceiroRepository parceiroRepository;

    public Parceiro save(Parceiro parceiro) {
        return parceiroRepository.save(parceiro);
    }

    public List<Parceiro> findAll() {
        return parceiroRepository.findAll();
    }

    public Parceiro findById(Long id) {
        return parceiroRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        parceiroRepository.deleteById(id);
    }
}
