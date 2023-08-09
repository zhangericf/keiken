package com.keiken.discoverspringaop;

import com.keiken.discoverspringaop.config.ProjectConfig;
import com.keiken.discoverspringaop.services.TimerService;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args)  {
        try (var c = new AnnotationConfigApplicationContext(ProjectConfig.class)) {
            TimerService timer = c.getBean("timer", TimerService.class);
            timer.waitSeconds(1);
        }
    }
}