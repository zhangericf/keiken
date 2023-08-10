package com.keiken.chatgptapi.repositories;

import com.keiken.chatgptapi.entities.Conversation;
import org.springframework.data.repository.CrudRepository;

public interface ConversationRepository extends CrudRepository<Conversation, Integer> {
}
