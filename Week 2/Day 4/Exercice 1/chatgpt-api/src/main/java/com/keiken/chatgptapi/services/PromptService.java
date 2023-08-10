package com.keiken.chatgptapi.services;

import com.keiken.chatgptapi.entities.Conversation;
import com.keiken.chatgptapi.entities.Prompt;
import com.theokanning.openai.completion.CompletionRequest;
import com.theokanning.openai.service.OpenAiService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;

@Service
@Transactional
public class PromptService {
    private final ConversationService conversationService;

    public PromptService(ConversationService conversationService) {
        this.conversationService = conversationService;
    }

    public String askQuestion(Prompt prompt) {
        OpenAiService openAiService = new OpenAiService(prompt.getOpenAIToken());
        CompletionRequest completionRequest = CompletionRequest.builder()
                .model("text-davinci-003")
                .prompt(prompt.getQuestion())
                .maxTokens(2048)
                .echo(true)
                .user("user")
                .n(1)
                .build();
        String text = openAiService.createCompletion(completionRequest).getChoices().get(0).getText();
        String response = text.replace(prompt.getQuestion(), "").trim();
        Conversation conversation = new Conversation(prompt.getQuestion(), response);
        conversationService.saveConversation(conversation);
        return response;
    }
}
