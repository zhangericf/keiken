package beverages;

import options.Cinnamon;
import options.Cream;
import options.Option;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class HotChocolate extends ConcreteBeverage {
    public double basePrice() { return 1.45; };
    @Override
    public List<Option> availableOptions() {
        return Arrays.asList(
                new Cream(),
                new Cinnamon()
        );
    }
}
