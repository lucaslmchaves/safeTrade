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

    @PostMapping
    public ResponseEntity<?> createAvaliacao(@RequestBody Avaliacao avaliacao) {
        return ResponseEntity.ok(avaliacaoService.save(avaliacao));
    }

    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<?> getAvaliacoesByUsuario(@PathVariable Long usuarioId) {
        List<Avaliacao> avaliacoes = avaliacaoService.findByUsuarioId(usuarioId);
        return ResponseEntity.ok(avaliacoes);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAvaliacao(@PathVariable Long id) {
        avaliacaoService.delete(id);
        return ResponseEntity.ok().build();
    }
}
