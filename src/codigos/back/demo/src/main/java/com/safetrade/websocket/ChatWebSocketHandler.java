package com.safetrade.websocket;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import com.safetrade.models.ChatMessage;
import com.safetrade.models.Usuario;
import com.safetrade.services.ChatMessageService;
import com.safetrade.services.ChatRoomService;
import com.safetrade.services.UsuarioService;

@Controller
public class ChatWebSocketHandler {

    @Autowired
    private ChatMessageService chatMessageService;

    @Autowired
    private ChatRoomService chatRoomService;

    @Autowired
    private UsuarioService usuarioService;

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public ChatMessage sendMessage(ChatMessage message) {
        String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Usuario sender = usuarioService.findByUsername(username);
        message.setSender(sender);
        message.setTimestamp(new Date());
        chatMessageService.save(message);
        return message;
    }

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public ChatMessage addUser(ChatMessage message) {
        String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Usuario sender = usuarioService.findByUsername(username);
        message.setSender(sender);
        message.setTimestamp(new Date());
        message.setContent(HtmlUtils.htmlEscape(message.getSender().getUsername()) + " joined!");
        chatMessageService.save(message);
        return message;
    }

    public ChatMessageService getChatMessageService() {
        return chatMessageService;
    }

    public void setChatMessageService(ChatMessageService chatMessageService) {
        this.chatMessageService = chatMessageService;
    }

    public ChatRoomService getChatRoomService() {
        return chatRoomService;
    }

    public void setChatRoomService(ChatRoomService chatRoomService) {
        this.chatRoomService = chatRoomService;
    }

    public UsuarioService getUsuarioService() {
        return usuarioService;
    }

    public void setUsuarioService(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }
}
