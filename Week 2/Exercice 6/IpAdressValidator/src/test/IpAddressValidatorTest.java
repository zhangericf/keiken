package test;
import main.IpAddressValidator;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import static org.junit.jupiter.api.Assertions.*;

public class IpAddressValidatorTest {
    @Test
    void ValidAddressOne(){
        Assertions.assertTrue(IpAddressValidator.ValidateIpv4Address("1.1.1.1"));
    }
    @Test
    void ValidAddressTwo(){
        Assertions.assertTrue(IpAddressValidator.ValidateIpv4Address("192.168.1.1"));
    }
    @Test
    void ValidAddressThree(){
        Assertions.assertTrue(IpAddressValidator.ValidateIpv4Address("10.0.0.1"));
    }
    @Test
    void ValidAddressFour(){
        Assertions.assertTrue(IpAddressValidator.ValidateIpv4Address("127.0.0.1"));
    }

    @Test
    void NotValidAddressOne(){
        Assertions.assertFalse(IpAddressValidator.ValidateIpv4Address("0.0.0.0"));
    }
    @Test
    void NotValidAddressTwo(){
        Assertions.assertFalse(IpAddressValidator.ValidateIpv4Address("255.255.255.255"));
    }
    @Test
    void NotValidAddressThree(){
        Assertions.assertFalse(IpAddressValidator.ValidateIpv4Address("1.1.1.0"));

    }
    @Test
    void NotValidAddressFour(){
        Assertions.assertFalse(IpAddressValidator.ValidateIpv4Address("10.0.1"));

    }
}
