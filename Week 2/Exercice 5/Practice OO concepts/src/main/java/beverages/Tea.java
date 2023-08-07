package beverages;

import options.Cinnamon;
import options.Milk;
import options.Option;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Tea extends ConcreteBeverage {
    public double basePrice() { return 1.5; };
    @Override
    public List<Option> availableOptions() {
        return Arrays.asList(
                new Milk(),
                new Cinnamon()
        );
    }
}
