package com.safetrade.controllers;

import com.safetrade.models.Avaliacao;
import com.safetrade.services.AvaliacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/avaliacoes")
public class AvaliacaoController {

    @Autowired
    private AvaliacaoService avaliacaoService;

    @PostMapping("/create/{usuarioId}")
    public ResponseEntity<Avaliacao> createAvaliacao(@PathVariable Long usuarioId, @RequestBody Avaliacao avaliacao) {
        return ResponseEntity.ok(avaliacaoService.createAvaliacao(avaliacao, usuarioId));
    }

    @GetMapping("/user/{usuarioId}")
    public ResponseEntity<List<Avaliacao>> getAvaliacoesByUsuarioId(@PathVariable Long usuarioId) {
        return ResponseEntity.ok(avaliacaoService.getAvaliacoesByUsuarioId(usuarioId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Avaliacao> getAvaliacaoById(@PathVariable Long id) {
        return avaliacaoService.getAvaliacaoById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Avaliacao> updateAvaliacao(@PathVariable Long id, @RequestBody Avaliacao avaliacao) {
        if (!avaliacaoService.getAvaliacaoById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        avaliacao.setId(id);
        return ResponseEntity.ok(avaliacaoService.updateAvaliacao(avaliacao));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteAvaliacao(@PathVariable Long id) {
        avaliacaoService.deleteAvaliacao(id);
        return ResponseEntity.noContent().build();
    }
}
