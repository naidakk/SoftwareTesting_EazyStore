package com.eazybytes.coreconcepts;

public class FactoryVehicle {

    public void makeVehicleUsingFactoryPattern() {
        SpeakerFactory factory = new SpeakerFactory();
        Speaker speaker = factory.getSpeaker();
        System.out.println(speaker.makeSound());

        WheelFactory wheelFactory = new WheelFactory();
        Wheel wheel = wheelFactory.getWheel();
        System.out.println(wheel.moveVehicle());
    }

    public static void main(String[] args) {
        FactoryVehicle vehicle = new FactoryVehicle();
        vehicle.makeVehicleUsingFactoryPattern();
    }

}
