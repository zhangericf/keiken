package com.keiken.chatgptapi.controllers;

import com.keiken.chatgptapi.entities.Conversation;
import com.keiken.chatgptapi.services.ConversationService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ConversationController {

    private final ConversationService conversationService;

    public ConversationController(ConversationService conversationService) {
        this.conversationService = conversationService;
    }

    @GetMapping("/conversations")
    @ApiResponse(description = "Return a list of all conversations with question and answer")
    public Iterable<Conversation> getAllConversations() {
        return conversationService.getAllConversations();
    }

    public void saveConversation(Conversation conversation) {
        conversationService.saveConversation(conversation);
    }
}
