package com.safetrade.auth.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.safetrade.auth.models.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {}
