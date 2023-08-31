package com.keiken.chatgptapi.controllers;

import com.keiken.chatgptapi.entities.Conversation;
import com.keiken.chatgptapi.entities.Prompt;
import com.keiken.chatgptapi.services.ConversationService;
import com.keiken.chatgptapi.services.PromptService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import okhttp3.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PromptController {

    private final PromptService promptService;

    public PromptController(PromptService promptService) {
        this.promptService = promptService;
    }

    @PostMapping("/prompts")
    @ApiResponse(description = "Send a prompt to ChatGPT with your OpenAIToken and your question")
    public ResponseEntity askQuestion(Prompt prompt) {
        return  new ResponseEntity(promptService.askQuestion(prompt), HttpStatus.CREATED);
    }
}
