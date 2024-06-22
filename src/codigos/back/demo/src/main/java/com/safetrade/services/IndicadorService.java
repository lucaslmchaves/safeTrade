package com.safetrade.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.safetrade.repositories.AnuncioRepository;
import com.safetrade.repositories.TrocaRepository;
import com.safetrade.repositories.UsuariosRepository;

@Service
public class IndicadorService {

    @Autowired
    private AnuncioRepository anuncioRepository;

    @Autowired
    private TrocaRepository trocaRepository;

    @Autowired
    private UsuariosRepository usuariosRepository;

    public long calcularTotalUsuariosAtivos() {
        return usuariosRepository.count(); // Assumindo que todos os usuários são considerados ativos
    }

    public double calcularTaxaTrocasConcluidas() {
        long totalTrocas = trocaRepository.count();
        long trocasConcluidas = trocaRepository.findAll().stream().filter(troca -> "CONCLUIDA".equals(troca.getStatus())).count();

        if (totalTrocas == 0) {
            return 0.0;
        }

        return ((double) trocasConcluidas / totalTrocas) * 100;
    }

    public long calcularTotalAnunciosCriados() {
        return anuncioRepository.count();
    }
}
