package com.safetrade.services;

import com.safetrade.models.ChatRoom;
import com.safetrade.repositories.ChatRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatRoomService {
    @Autowired
    private ChatRoomRepository chatRoomRepository;

    public ChatRoom save(ChatRoom chatRoom) {
        return chatRoomRepository.save(chatRoom);
    }

    public List<ChatRoom> findAll() {
        return chatRoomRepository.findAll();
    }

    public ChatRoom findById(Long id) {
        return chatRoomRepository.findById(id).orElse(null);
    }
}
