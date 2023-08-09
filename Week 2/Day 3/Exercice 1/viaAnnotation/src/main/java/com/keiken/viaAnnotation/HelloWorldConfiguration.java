package com.keiken.viaAnnotation;

import com.keiken.viaAnnotation.providers.HelloWorldMessageProvider;
import com.keiken.viaAnnotation.providers.MessageProvider;
import com.keiken.viaAnnotation.renderers.MessageRenderer;
import com.keiken.viaAnnotation.renderers.StandardOutMessageRenderer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HelloWorldConfiguration {
    // equivalent to <bean id="provider" class=".."/>
    @Bean
    public MessageProvider provider() {
        return new HelloWorldMessageProvider();
    }
    // equivalent to <bean id="renderer" class=".."/>
    @Bean
    public MessageRenderer renderer(){
        MessageRenderer renderer = new StandardOutMessageRenderer();
        renderer.setMessageProvider(provider());
        return renderer;
    }
}