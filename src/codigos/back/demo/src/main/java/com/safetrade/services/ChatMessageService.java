package com.safetrade.services;

import com.safetrade.models.ChatMessage;
import com.safetrade.models.ChatRoom;
import com.safetrade.repositories.ChatMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatMessageService {
    @Autowired
    private ChatMessageRepository chatMessageRepository;

    public ChatMessage save(ChatMessage chatMessage) {
        return chatMessageRepository.save(chatMessage);
    }

    public List<ChatMessage> findByRoom(ChatRoom room) {
        return chatMessageRepository.findByRoom(room);
    }
}
