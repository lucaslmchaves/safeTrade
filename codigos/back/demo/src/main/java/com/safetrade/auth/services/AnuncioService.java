package com.safetrade.auth.services;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.safetrade.auth.models.Anuncio;
import com.safetrade.auth.models.Usuario;
import com.safetrade.auth.repositories.AnuncioRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AnuncioService {

    @Autowired
    private final AnuncioRepository anuncioRepository;

    public AnuncioService(AnuncioRepository anuncioRepository) {
        this.anuncioRepository = anuncioRepository;
    }

    public Anuncio findById(Long id){
        Optional<Anuncio> anuncio  = this.anuncioRepository.findById(id);
        return anuncio.orElseThrow(() -> new RuntimeException(
            "Anuncio não encontrado: Id: " + id + " , Tipo: " + Usuario.class.getName()));
    }

    @Transactional
    public Anuncio create(Anuncio obj){
        if (obj.getCriador() == null) {
            throw new IllegalArgumentException("Anúncio não definido");
        }
        return anuncioRepository.save(obj);
    }

    @Transactional
    public Anuncio update(Anuncio obj){
        Anuncio newObj = findById(obj.getId());
        newObj.setDescricao(obj.getDescricao());
        newObj.setTitulo(obj.getTitulo());
         return this.anuncioRepository.save(newObj);
    }

    @Transactional
    public void delete(Long id){
        findById(id);
        try {
            this.anuncioRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Não é possível excluir, pois há entidades relacionadas.");
        }
    }

    public List<Anuncio> getAllAnuncios() {
        List<Anuncio> anuncios = anuncioRepository.findAll();
        for (Anuncio anuncio : anuncios) {
            // Acessa a propriedade lazy para forçar a inicialização
            anuncio.getCriador().getNome(); // Supondo que "getNome()" seja um método na classe Usuario
        }
        return anuncios;
    }


}
