package beverages;

import options.Option;

import java.util.ArrayList;
import java.util.List;

public abstract class ConcreteBeverage implements Beverage {
    abstract double basePrice();
    private List<Option> options = new ArrayList<>();

    public void addOption(Option option) {
        if(availableOptions().stream().anyMatch(c -> c.getClass().equals(option.getClass()))) {
            options.add((option));
            System.out.println("Option successfully added");
        } else {
            System.out.println("Option not available for this beverage");
        }
    }

    @Override
    public double price() {
        return options.stream().map(Option::price).reduce(basePrice(), Double::sum);
    }

    public List<Option> availableOptions() {
        return new ArrayList<>();
    }
}
