package com.safetrade.controllers;

import com.safetrade.models.Mensagem;
import com.safetrade.services.MensagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class MensagemController {

    @Autowired
    private MensagemService mensagemService;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/chat.sendMessage")
    public void sendMessage(Mensagem mensagem) {
        mensagemService.saveMensagem(mensagem);
        messagingTemplate.convertAndSend("/topic/public", mensagem);
    }

    @MessageMapping("/chat.addUser")
    public void addUser(Mensagem mensagem) {
        mensagem.setConteudo(mensagem.getRemetente().getNome() + " entrou no chat.");
        messagingTemplate.convertAndSend("/topic/public", mensagem);
    }
}
