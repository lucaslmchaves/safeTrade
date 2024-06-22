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

    @PostMapping
    public ResponseEntity<?> createAnuncio(@RequestBody Anuncio anuncio) {
        return ResponseEntity.ok(anuncioService.save(anuncio));
    }

    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<?> getAnunciosByUsuario(@PathVariable Long usuarioId) {
        List<Anuncio> anuncios = anuncioService.findByUsuarioId(usuarioId);
        return ResponseEntity.ok(anuncios);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateAnuncio(@PathVariable Long id, @RequestBody Anuncio anuncio) {
        Anuncio existingAnuncio = anuncioService.findById(id);
        if (existingAnuncio == null) {
            return ResponseEntity.notFound().build();
        }
        existingAnuncio.setTitulo(anuncio.getTitulo());
        existingAnuncio.setDescricao(anuncio.getDescricao());
        existingAnuncio.setImagemUrl(anuncio.getImagemUrl());
        return ResponseEntity.ok(anuncioService.update(existingAnuncio));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAnuncio(@PathVariable Long id) {
        anuncioService.delete(id);
        return ResponseEntity.ok().build();
    }
}
