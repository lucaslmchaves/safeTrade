package com.example.demo.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.demo.models.Parceiro;
import com.example.demo.services.ParceiroService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/parceiro")  // Atualizado para garantir que a rota esteja correta
@Validated
public class ParceiroController {

    @Autowired
    private final ParceiroService parceiroService;

    public ParceiroController(ParceiroService s) {
        this.parceiroService = s;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Parceiro> findById(@PathVariable Long id) {
        Parceiro obj = this.parceiroService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody Parceiro obj){
        this.parceiroService.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody Parceiro obj, @PathVariable Long id){
        obj.setId(id);
        this.parceiroService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.parceiroService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
