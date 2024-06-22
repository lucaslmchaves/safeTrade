package com.safetrade.services;

import com.safetrade.models.PropostasParceria;
import com.safetrade.repositories.PropostasParceriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropostasParceriaService {

    @Autowired
    private PropostasParceriaRepository propostasParceriaRepository;

    public PropostasParceria createProposta(PropostasParceria proposta) {
        return propostasParceriaRepository.save(proposta);
    }

    public List<PropostasParceria> getAllPropostas() {
        return propostasParceriaRepository.findAll();
    }

    public Optional<PropostasParceria> getPropostaById(Long id) {
        return propostasParceriaRepository.findById(id);
    }

    public Optional<PropostasParceria> getPropostaByCnpj(String cnpj) {
        return propostasParceriaRepository.findByCnpj(cnpj);
    }

    public PropostasParceria updateProposta(PropostasParceria proposta) {
        return propostasParceriaRepository.save(proposta);
    }

    public void deleteProposta(Long id) {
        propostasParceriaRepository.deleteById(id);
    }
}
