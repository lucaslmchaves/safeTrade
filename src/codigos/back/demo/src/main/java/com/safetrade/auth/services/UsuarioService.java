package com.safetrade.auth.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.safetrade.auth.models.Usuario;
import com.safetrade.auth.repositories.UsuarioRepository;

import java.util.*;

import jakarta.transaction.Transactional;

@Service
public class UsuarioService {
    
    @Autowired
    private UsuarioRepository clienteRepository;

    public Usuario findById(Long id){
        Optional<Usuario> cliente  = this.clienteRepository.findById(id);
        return cliente.orElseThrow(() -> new RuntimeException(
            "Usuario não encontrado: Id: " + id + " , Tipo: " + Usuario.class.getName()));
    }

    @Transactional
    public Usuario crate(Usuario obj){
        obj.setId(null);
        obj = this.clienteRepository.save(obj);
        return obj;
    }

    @Transactional
    public Usuario update(Usuario obj){
        Usuario newObj = findById(obj.getId());
        newObj.setNome(obj.getNome());
        return this.clienteRepository.save(newObj);
    }

    @Transactional
    public void delete(Long id){
        findById(id);
        try {
            this.clienteRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Não é possível excluir, pois há entidades relacionadas.");
        }
    }
}


