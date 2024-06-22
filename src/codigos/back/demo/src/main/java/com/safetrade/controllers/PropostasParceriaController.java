package com.safetrade.controllers;

import com.safetrade.models.PropostasParceria;
import com.safetrade.services.PropostasParceriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/parcerias")
public class PropostasParceriaController {

    @Autowired
    private PropostasParceriaService propostasParceriaService;

    @PostMapping("/create")
    public ResponseEntity<PropostasParceria> createProposta(@RequestBody PropostasParceria proposta) {
        return ResponseEntity.ok(propostasParceriaService.createProposta(proposta));
    }

    @GetMapping
    public ResponseEntity<List<PropostasParceria>> getAllPropostas() {
        return ResponseEntity.ok(propostasParceriaService.getAllPropostas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PropostasParceria> getPropostaById(@PathVariable Long id) {
        return propostasParceriaService.getPropostaById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/cnpj/{cnpj}")
    public ResponseEntity<PropostasParceria> getPropostaByCnpj(@PathVariable String cnpj) {
        return propostasParceriaService.getPropostaByCnpj(cnpj)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<PropostasParceria> updateProposta(@PathVariable Long id, @RequestBody PropostasParceria proposta) {
        if (!propostasParceriaService.getPropostaById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        proposta.setId(id);
        return ResponseEntity.ok(propostasParceriaService.updateProposta(proposta));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteProposta(@PathVariable Long id) {
        propostasParceriaService.deleteProposta(id);
        return ResponseEntity.noContent().build();
    }
}
