package com.safetrade.controllers;

import com.safetrade.models.Usuarios;
import com.safetrade.services.UsuariosService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api/contausuario")
public class ContaUsuarioController {
    @Autowired
    private UsuariosService usuariosService;

    @GetMapping
    public ResponseEntity<Optional<Usuarios>> getMyAccount(@AuthenticationPrincipal UserDetails userDetails) {
        Optional<Usuarios> user = usuariosService.findByEmail(userDetails.getUsername());
        return ResponseEntity.ok(user);
    }

    @PutMapping
    public ResponseEntity<Usuarios> updateMyAccount(@RequestBody Usuarios updatedUser, @AuthenticationPrincipal UserDetails userDetails) {
        Usuarios user = usuariosService.atualizacaoUsuario(userDetails.getUsername(), updatedUser);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/profile-picture")
    public ResponseEntity<Usuarios> updateProfilePicture(@RequestParam MultipartFile file, @AuthenticationPrincipal UserDetails userDetails) {
        Usuarios user = usuariosService.atualizarFotoDePerfil(userDetails.getUsername(), file);
        return ResponseEntity.ok(user);
    }
}
