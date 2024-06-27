package com.example.demo.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.demo.models.Usuario;
import com.example.demo.models.Usuario.CreateUsuario;
import com.example.demo.models.Usuario.UpdateUsuario;
import com.example.demo.services.UsuarioService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/usuario")
@Validated
public class UsuarioController {

    @Autowired
    private final UsuarioService clienteService;

    public UsuarioController(UsuarioService s) {
        this.clienteService = s;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> findById(@PathVariable Long id) {
        Usuario obj = this.clienteService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<Usuario> findByEmail(@PathVariable String email) {
        Usuario obj = this.clienteService.findByEmail(email);
        if (obj == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    @Validated(CreateUsuario.class)
    public ResponseEntity<Void> create(@Valid @RequestBody Usuario obj){
        this.clienteService.saveUsuario(obj);  // Correção do método para saveUsuario
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    @Validated(UpdateUsuario.class)
    public ResponseEntity<Void> update(@Valid @RequestBody Usuario obj, @PathVariable Long id){
        obj.setId(id);
        this.clienteService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.clienteService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario user) {
        Usuario existingUser = clienteService.findByEmail(user.getEmail());
        if (existingUser != null && user.getSenha().equals(existingUser.getSenha())) {
            return ResponseEntity.ok(existingUser);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
}
