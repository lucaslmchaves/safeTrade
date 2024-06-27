package com.example.demo.controllers;

import com.example.demo.models.Anuncio;
import com.example.demo.models.Usuario;
import com.example.demo.services.AnuncioService;
import com.example.demo.services.UsuarioService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/anuncios")
public class AnuncioController {

    @Autowired
    private final AnuncioService anuncioService;

    @Autowired
    private UsuarioService usuarioService;


    public AnuncioController(AnuncioService anuncioService) {
        this.anuncioService = anuncioService;
    }

    @PostMapping("/{userId}")
    public ResponseEntity<Anuncio> criarAnuncioParaUsuario(
    @PathVariable Long userId,
    @Validated @RequestBody Anuncio anuncio) {
    Usuario criador = usuarioService.findById(userId);
    anuncio.setCriador(criador);

    Anuncio novoAnuncio = anuncioService.create(anuncio);

    return ResponseEntity.ok(novoAnuncio);
    }

    @PostMapping
    public ResponseEntity<Anuncio> criarAnuncio(@RequestBody Long userId, @Validated @RequestBody Anuncio anuncio) {
    Usuario criador = usuarioService.findById(userId);
    anuncio.setCriador(criador);

    Anuncio novoAnuncio = anuncioService.create(anuncio);

    return ResponseEntity.ok(novoAnuncio);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Anuncio> getAnuncioById(@PathVariable Long id) {
    Anuncio anuncio = anuncioService.findById(id);
    return ResponseEntity.ok(anuncio);
}

@GetMapping
public ResponseEntity<List<Anuncio>> getAllAnuncios() {
    List<Anuncio> anuncios = anuncioService.getAllAnuncios();
    return ResponseEntity.ok(anuncios);
}



@DeleteMapping("/{id}")
public ResponseEntity<Void> delete(@PathVariable Long id) {
    this.anuncioService.delete(id);
    return ResponseEntity.noContent().build();
}

@PutMapping("/{id}")
public ResponseEntity<Anuncio> updateAnuncio(
    @PathVariable Long id,
    @Validated @RequestBody Anuncio anuncioAtualizado) {
    anuncioAtualizado.setId(id); // Assegura que o ID é mantido
    Anuncio anuncio = anuncioService.update(anuncioAtualizado);
    return ResponseEntity.ok(anuncio);
}


}
