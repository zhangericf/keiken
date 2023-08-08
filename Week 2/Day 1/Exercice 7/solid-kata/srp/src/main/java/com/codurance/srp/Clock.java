package com.codurance.srp;

import java.time.LocalDate;

public class Clock {

    public static final String DATE_FORMAT = "dd/MM/yyyy";
    public static LocalDate today() {
        return LocalDate.now();
    }
}