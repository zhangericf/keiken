package com.keiken.discoverspringaop.services;

import com.keiken.discoverspringaop.annotation.TimeIt;
import org.springframework.stereotype.Service;

public class TimeItService {
    @TimeIt
    public void waitSeconds(long seconds) {
        System.out.println("Waiting for " + seconds + "...");
        synchronized(this) {
            try {
                wait(seconds * 1000);
            } catch (InterruptedException ex) {
                ex.printStackTrace();
                return;
            }
            System.out.println("Done !");
        }
    }
}
