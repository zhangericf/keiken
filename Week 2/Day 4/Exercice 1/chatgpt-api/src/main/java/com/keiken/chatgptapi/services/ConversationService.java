package com.keiken.chatgptapi.services;

import com.keiken.chatgptapi.entities.Conversation;
import com.keiken.chatgptapi.repositories.ConversationRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ConversationService {
    private final ConversationRepository conversationRepository;

    public ConversationService(ConversationRepository conversationRepository) {
        this.conversationRepository = conversationRepository;
    }

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public Iterable<Conversation> getAllConversations() {
        return conversationRepository.findAll();
    }

    public void saveConversation(Conversation conversation) {
        conversationRepository.save(conversation);
    }
}
