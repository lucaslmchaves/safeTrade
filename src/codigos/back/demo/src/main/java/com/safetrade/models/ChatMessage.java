package com.safetrade.models;

import javax.persistence.*;
import java.util.Date;

@Entity
public class ChatMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    @Enumerated(EnumType.STRING)
    private MessageType type;

    private Date timestamp;

    @ManyToOne
    @JoinColumn(name = "sender_id")
    private Usuario sender;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private ChatRoom room;

    public enum MessageType {
        CHAT,
        JOIN,
        LEAVE
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public MessageType getType() {
        return type;
    }

    public void setType(MessageType type) {
        this.type = type;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public Usuario getSender() {
        return sender;
    }

    public void setSender(Usuario sender) {
        this.sender = sender;
    }

    public ChatRoom getRoom() {
        return room;
    }

    public void setRoom(ChatRoom room) {
        this.room = room;
    }
}
