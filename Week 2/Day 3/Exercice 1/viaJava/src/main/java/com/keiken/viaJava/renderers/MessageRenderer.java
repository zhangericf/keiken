package com.keiken.viaJava.renderers;

import com.keiken.viaJava.providers.MessageProvider;

public interface MessageRenderer {
    void render();
    void setMessageProvider(MessageProvider provider);
    MessageProvider getMessageProvider();
}