package com.safetrade.services;

import com.safetrade.models.Mensagem;
import com.safetrade.repositories.MensagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MensagemService {

    @Autowired
    private MensagemRepository mensagemRepository;

    public Mensagem saveMensagem(Mensagem mensagem) {
        return mensagemRepository.save(mensagem);
    }

    public List<Mensagem> getAllMensagens() {
        return mensagemRepository.findAll();
    }
}
