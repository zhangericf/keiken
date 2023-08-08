package unit_tests;

import beverages.*;
import options.Cinnamon;
import options.Cream;
import options.Milk;
import org.junit.Test;

import java.util.Arrays;
import java.util.Collections;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.closeTo;

public class BeveragesPricingTest {
    @Test
    public void computes_coffee_price() {
        Beverage coffee = new Coffee();
        assertThat(coffee.price(), is(closeTo(1.20, 0.001)));
    }

    @Test
    public void computes_tea_price() {
        Beverage tea = new Tea();
        assertThat(tea.price(), is(closeTo(1.50, 0.001)));
    }

    @Test
    public void computes_hot_chocolate_price() {
        Beverage hotChocolate = new HotChocolate();
        assertThat(hotChocolate.price(), is(closeTo(1.45, 0.001)));
    }

    @Test
    public void computes_tea_with_milk_price() {
        Tea teaWithMilk = new Tea();
        teaWithMilk.addOption(new Milk());
        assertThat(teaWithMilk.price(), is(closeTo(1.60, 0.001)));
    }

    @Test
    public void computes_coffee_with_milk_price() {
        Coffee coffeeWithMilk = new Coffee();
        coffeeWithMilk.addOption(new Milk());
        assertThat(coffeeWithMilk.price(), is(closeTo(1.30, 0.001)));
    }

    @Test
    public void computes_coffee_with_milk_and_cream_price() {
        Coffee coffeeWithMilkAndCream = new Coffee();
        coffeeWithMilkAndCream.addOption(new Milk());
        coffeeWithMilkAndCream.addOption(new Cream());
        assertThat(coffeeWithMilkAndCream.price(), is(closeTo(1.45, 0.001)));
    }

    @Test
    public void computes_hot_chocolate_with_cream_price() {
        HotChocolate hotChocolateWithCream = new HotChocolate();
        hotChocolateWithCream.addOption(new Cream());
        hotChocolateWithCream.addOption(new Cinnamon());
        assertThat(hotChocolateWithCream.price(),  is(closeTo(1.65, 0.001)));
    }
}
