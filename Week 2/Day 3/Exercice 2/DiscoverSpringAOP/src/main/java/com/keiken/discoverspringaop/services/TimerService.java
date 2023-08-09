package com.keiken.discoverspringaop.services;

import com.keiken.discoverspringaop.annotation.TimeIt;
import org.springframework.stereotype.Service;

@Service
public class TimerService {
    @TimeIt
    public void waitSeconds(long seconds) {
        System.out.println("Waiting for " + seconds + "s...");
        synchronized(this) {
            try {
                wait(seconds * 1000);
            } catch (InterruptedException ex) {
                ex.printStackTrace();
                return;
            }
        }
    }
}
