package com.safetrade.controllers;

import com.safetrade.models.Parceiro;
import com.safetrade.services.ParceiroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/parceiros")
public class ParceiroController {
    @Autowired
    private ParceiroService parceiroService;

    @PostMapping
    public ResponseEntity<?> createParceiro(@RequestBody Parceiro parceiro) {
        return ResponseEntity.ok(parceiroService.save(parceiro));
    }

    @GetMapping
    public ResponseEntity<?> getAllParceiros() {
        List<Parceiro> parceiros = parceiroService.findAll();
        return ResponseEntity.ok(parceiros);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getParceiroById(@PathVariable Long id) {
        Parceiro parceiro = parceiroService.findById(id);
        if (parceiro == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(parceiro);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateParceiro(@PathVariable Long id, @RequestBody Parceiro parceiro) {
        Parceiro existingParceiro = parceiroService.findById(id);
        if (existingParceiro == null) {
            return ResponseEntity.notFound().build();
        }
        existingParceiro.setNomeEmpresa(parceiro.getNomeEmpresa());
        existingParceiro.setCnpj(parceiro.getCnpj());
        existingParceiro.setPropostaParceria(parceiro.getPropostaParceria());
        return ResponseEntity.ok(parceiroService.save(existingParceiro));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteParceiro(@PathVariable Long id) {
        parceiroService.delete(id);
        return ResponseEntity.ok().build();
    }
}
