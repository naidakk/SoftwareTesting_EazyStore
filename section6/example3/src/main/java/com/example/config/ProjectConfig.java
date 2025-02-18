package com.example.config;

import com.example.beans.Vehicle;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;


@Configuration
public class ProjectConfig {


    @Bean(name="audiVehicle")
    Vehicle vehicle1() {
        Vehicle vehicle = new Vehicle();
        vehicle.setName("Audi");
        return vehicle;
    }

    @Bean(value="hondaVehicle")
    Vehicle vehicle2() {
        Vehicle vehicle = new Vehicle();
        vehicle.setName("Honda");
        return vehicle;
    }

    /*
    When you have multiple beans of the same kind inside the Spring context,
    you can make one of them primary by using @Primary annotation. Primary bean is
    the one which Spring will choose if it has multiple options and you don’t specify a name.
    In other words, it is the default bean that Spring Context will consider in case of
    confusion due to multiple beans present of same type.
    * */
    @Primary
    @Bean("ferrariVehicle")
    Vehicle vehicle3() {
        Vehicle vehicle = new Vehicle();
        vehicle.setName("Ferrari");
        return vehicle;
    }

}
