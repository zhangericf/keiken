package com.keiken.discoverspringaop.config;

import com.keiken.discoverspringaop.services.TimerService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy
@ComponentScan({"com.keiken.discoverspringaop.annotation","com.keiken.discoverspringaop.aspects","com.keiken.discoverspringaop.services"})
public class ProjectConfig {
    @Bean
    public TimerService timer() {
        return new TimerService();
    }
}
