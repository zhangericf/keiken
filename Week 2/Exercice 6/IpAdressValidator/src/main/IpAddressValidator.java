package main;

import java.util.Arrays;

public class IpAddressValidator {
    public static boolean ValidateIpv4Address(String ipAddress) {
        String[] numbers = ipAddress.split("\\.");

        if (numbers.length != 4) {
            return false;
        }

        for (int i = 0; numbers.length > i; i++) {
            try {
                int value = Integer.parseInt(numbers[i]);
                if (value < 0 || value > 255) {
                    return false;
                }
                if (i == 3 && (value == 0 || value == 255)) {
                    return false;
                }
            } catch (NumberFormatException e) {
                return false;
            }
        }
        return true;
    }
}