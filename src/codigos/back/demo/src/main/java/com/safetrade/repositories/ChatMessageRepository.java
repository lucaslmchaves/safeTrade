package com.safetrade.repositories;

import com.safetrade.models.ChatMessage;
import com.safetrade.models.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
    List<ChatMessage> findByRoom(ChatRoom room);
}
