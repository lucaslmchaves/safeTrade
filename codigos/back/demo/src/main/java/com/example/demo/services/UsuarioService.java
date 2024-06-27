package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

import com.example.demo.models.Usuario;
import com.example.demo.repositories.UsuarioRepository;

import jakarta.transaction.Transactional;

@Service
public class UsuarioService {
    
    @Autowired
    private UsuarioRepository clienteRepository;

    public Usuario findById(Long id) {
        Optional<Usuario> cliente = this.clienteRepository.findById(id);
        return cliente.orElseThrow(() -> new RuntimeException(
            "Usuario não encontrado: Id: " + id + " , Tipo: " + Usuario.class.getName()));
    }

    @Transactional
    public Usuario saveUsuario(Usuario obj) {
        obj.setId(null);
        obj = this.clienteRepository.save(obj);
        return obj;
    }

    @Transactional
    public Usuario update(Usuario obj) {
        Usuario newObj = findById(obj.getId());
        newObj.setNome(obj.getNome());
        newObj.setEmail(obj.getEmail());
        newObj.setSenha(obj.getSenha());
        newObj.setCpf(obj.getCpf()); 
        return this.clienteRepository.save(newObj);
    }

    @Transactional
    public void delete(Long id) {
        findById(id);
        try {
            this.clienteRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Não é possível excluir, pois há entidades relacionadas.");
        }
    }

    public Usuario findByEmail(String email) {
        return this.clienteRepository.findByEmail(email);
    }
}
