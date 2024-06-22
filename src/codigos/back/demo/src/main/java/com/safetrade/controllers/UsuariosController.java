package com.safetrade.controllers;

import com.safetrade.models.Usuarios;
import com.safetrade.services.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
public class UsuariosController {

    @Autowired
    private UsuariosService usuariosService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> registerUsuario(@RequestBody Usuarios usuario) {
        if (usuariosService.checkIfUsuarioExists(usuario.getEmail(), usuario.getCpf())) {
            return ResponseEntity.badRequest().body("Email or CPF already in use");
        }
        usuariosService.registerUsuario(usuario);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUsuario(@RequestParam String email, @RequestParam String senha) {
        Optional<Usuarios> usuario = usuariosService.findByEmail(email);
        if (usuario.isPresent() && passwordEncoder.matches(senha, usuario.get().getSenha())) {
            return ResponseEntity.ok("Login successful");
        }
        return ResponseEntity.badRequest().body("Invalid email or password");
    }
}
