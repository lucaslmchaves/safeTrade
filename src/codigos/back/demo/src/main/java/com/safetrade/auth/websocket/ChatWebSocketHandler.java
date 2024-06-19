package com.safetrade.auth.websocket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.safetrade.auth.models.Message;
import com.safetrade.auth.repositories.MessageRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Component
public class ChatWebSocketHandler extends TextWebSocketHandler {

    @Autowired
    private MessageRepository messageRepository;

    private final List<WebSocketSession> sessions = new ArrayList<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.add(session);
        System.out.println("New session connected: " + session.getId());
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String payload = message.getPayload();
        System.out.println("Received message: " + payload); // Log para depuração
        String[] parts = payload.split(": ", 2);
        String username = parts[0];
        String content = parts[1];

        Message newMessage = new Message(username, content, LocalDateTime.now());
        messageRepository.save(newMessage);

        for (WebSocketSession webSocketSession : sessions) {
            webSocketSession.sendMessage(message);
            System.out.println("Sent message to session: " + webSocketSession.getId()); // Log para depuração
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        sessions.remove(session);
        System.out.println("Session closed: " + session.getId());
    }
}
