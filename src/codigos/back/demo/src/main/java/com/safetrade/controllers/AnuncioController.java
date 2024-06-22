package com.safetrade.controllers;

import com.safetrade.models.Anuncio;
import com.safetrade.services.AnuncioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/anuncios")
public class AnuncioController {

    @Autowired
    private AnuncioService anuncioService;

    @PostMapping("/create/{usuarioId}")
    public ResponseEntity<Anuncio> createAnuncio(@PathVariable Long usuarioId, @RequestBody Anuncio anuncio) {
        return ResponseEntity.ok(anuncioService.createAnuncio(anuncio, usuarioId));
    }

    @GetMapping("/user/{usuarioId}")
    public ResponseEntity<List<Anuncio>> getAnunciosByUsuarioId(@PathVariable Long usuarioId) {
        return ResponseEntity.ok(anuncioService.getAnunciosByUsuarioId(usuarioId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Anuncio> getAnuncioById(@PathVariable Long id) {
        return anuncioService.getAnuncioById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Anuncio> updateAnuncio(@PathVariable Long id, @RequestBody Anuncio anuncio) {
        if (!anuncioService.getAnuncioById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        anuncio.setId(id);
        return ResponseEntity.ok(anuncioService.updateAnuncio(anuncio));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteAnuncio(@PathVariable Long id) {
        anuncioService.deleteAnuncio(id);
        return ResponseEntity.noContent().build();
    }
}
