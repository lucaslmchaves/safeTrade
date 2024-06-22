package com.safetrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.safetrade.models.Usuario;
import com.safetrade.services.UsuarioService;

@RestController
@RequestMapping("/api/auth")
public class UsuarioController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(usuario.getUsername(), usuario.getPassword())
            );
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }

        UserDetails userDetails = userDetailsService.loadUserByUsername(usuario.getUsername());
        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities()));

        return ResponseEntity.ok("User authenticated successfully");
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Usuario usuario) throws Exception {
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        usuarioService.save(usuario);
        return ResponseEntity.ok("User registered successfully");
    }
}
