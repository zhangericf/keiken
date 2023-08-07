package beverages;

import options.Cinnamon;
import options.Cream;
import options.Milk;
import options.Option;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Coffee extends ConcreteBeverage {
    public double basePrice() { return 1.2; };
    @Override
    public List<Option> availableOptions() {
        return Arrays.asList(
                new Milk(),
                new Cream(),
                new Cinnamon()
        );
    }
}
