package com.example.beans;

import org.springframework.stereotype.Component;

@Component("cappuccino")
public class Cappuccino implements Coffee{

    @Override
    public String makeCoffee() {
        return "Cappuccino Coffee";
    }
}
