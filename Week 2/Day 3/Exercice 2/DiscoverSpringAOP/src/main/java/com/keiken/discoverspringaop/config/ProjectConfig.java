package org.keiken.discoverspringaop.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy
@ComponentScan({"com.keiken.discoverspringaop.annotation","com.keiken.discoverspringaop.aspects","com.keiken.discoverspringaop.timer"})
public class ProjectConfig {
}
