package com.safetrade.auth.services;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.safetrade.auth.models.Parceiro;
import com.safetrade.auth.models.Usuario;
import com.safetrade.auth.repositories.ParceiroRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ParceiroService {

    @Autowired
    private final ParceiroRepository parceiroRepository;

    public ParceiroService(ParceiroRepository parceiroRepository) {
        this.parceiroRepository = parceiroRepository;
    }

    public Parceiro findById(Long id){
        Optional<Parceiro> parceiro  = this.parceiroRepository.findById(id);
        return parceiro.orElseThrow(() -> new RuntimeException(
            "Anuncio não encontrado: Id: " + id + " , Tipo: " + Usuario.class.getName()));
    }

    @Transactional
    public Parceiro create(Parceiro obj){
        obj.setId(null);
        obj = this.parceiroRepository.save(obj);
        return obj;
    }

    @Transactional
    public Parceiro update(Parceiro obj){
        Parceiro newObj = findById(obj.getId());
        newObj.setNome(obj.getNome());
        newObj.setDetalhamento(obj.getDetalhamento());
        newObj.setProposta(obj.getProposta());
        return this.parceiroRepository.save(newObj);
    }

    @Transactional
    public void delete(Long id){
        findById(id);
        try {
            this.parceiroRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Não é possível excluir, pois há entidades relacionadas.");
        }
    }

    public List<Parceiro> getAllParceiros() {
        List<Parceiro> parceiros = parceiroRepository.findAll();
        return parceiros;
    }


}
