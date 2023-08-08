package com.codurance.ocp;

public class Manager extends Employee {

    public Manager(int salary, int bonus) {
        super(salary, bonus);
    }

    public int payAmount() {
        return salary + bonus;
    }
}
