package com.safetrade.controllers;

import com.safetrade.models.Troca;
import com.safetrade.services.TrocaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trocas")
public class TrocaController {

    @Autowired
    private TrocaService trocaService;

    @PostMapping("/create")
    public ResponseEntity<Troca> createTroca(@RequestBody Troca troca) {
        return ResponseEntity.ok(trocaService.createTroca(troca));
    }

    @GetMapping
    public ResponseEntity<List<Troca>> getAllTrocas() {
        return ResponseEntity.ok(trocaService.getAllTrocas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Troca> getTrocaById(@PathVariable Long id) {
        return trocaService.getTrocaById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Troca> updateTroca(@PathVariable Long id, @RequestBody Troca troca) {
        if (!trocaService.getTrocaById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        troca.setId(id);
        return ResponseEntity.ok(trocaService.updateTroca(troca));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTroca(@PathVariable Long id) {
        trocaService.deleteTroca(id);
        return ResponseEntity.noContent().build();
    }
}
