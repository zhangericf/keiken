package com.keiken.chatgptapi.entities;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Conversation {

    @Id
    private int id;

    private String question;
    private String response;
    private LocalDateTime createdAt;

    public int getId() {
        return id;
    }

    public Conversation(String question, String response) {
        this.question = question;
        this.response = response;
    }

    public void getId(int id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
