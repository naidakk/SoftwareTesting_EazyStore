package com.eazybytes.coreconcepts;

public class Vehicle {

    public void makeVehicle() {
        // SonySpeaker speaker = new SonySpeaker();
        BoseSpeaker speaker = new BoseSpeaker();
        System.out.println(speaker.makeSound());

        // MichelinWheel wheel = new MichelinWheel();
        BridgeStoneWheel wheel = new BridgeStoneWheel();
        System.out.println(wheel.moveVehicle());
    }

    public static void main(String[] args) {
        Vehicle vehicle = new Vehicle();
        vehicle.makeVehicle();
    }

}
