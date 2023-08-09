package com.keiken.viaAnnotation.renderers;

import com.keiken.viaAnnotation.providers.MessageProvider;

public interface MessageRenderer {
    void render();
    void setMessageProvider(MessageProvider provider);
    MessageProvider getMessageProvider();
}