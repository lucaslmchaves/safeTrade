package com.safetrade.controllers;

import com.safetrade.services.IndicadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/indicadores")
public class IndicadorController {

    @Autowired
    private IndicadorService indicadorService;

    @GetMapping("/total-usuarios-ativos")
    public ResponseEntity<Long> getTotalUsuariosAtivos() {
        return ResponseEntity.ok(indicadorService.calcularTotalUsuariosAtivos());
    }

    @GetMapping("/taxa-trocas-concluidas")
    public ResponseEntity<Double> getTaxaTrocasConcluidas() {
        return ResponseEntity.ok(indicadorService.calcularTaxaTrocasConcluidas());
    }

    @GetMapping("/total-anuncios-criados")
    public ResponseEntity<Long> getTotalAnunciosCriados() {
        return ResponseEntity.ok(indicadorService.calcularTotalAnunciosCriados());
    }
}
