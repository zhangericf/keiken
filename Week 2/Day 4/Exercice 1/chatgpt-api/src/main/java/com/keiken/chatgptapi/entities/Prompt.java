package com.keiken.chatgptapi.entities;

import java.time.LocalDateTime;

public class Prompt {
    private String openAIToken;
    private String question;

    public String getOpenAIToken() {
        return openAIToken;
    }

    public void setOpenAIToken(String openAIToken) {
        this.openAIToken = openAIToken;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }
}
