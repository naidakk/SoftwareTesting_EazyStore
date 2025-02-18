package com.example.beans;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
public class Engine {

    private final Vehicle vehicle;

    @Autowired
    public Engine(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
}
