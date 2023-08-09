package com.keiken.viaXml.renderers;

import com.keiken.viaXml.providers.MessageProvider;

public interface MessageRenderer {
    void render();
    void setMessageProvider(MessageProvider provider);
    MessageProvider getMessageProvider();
}