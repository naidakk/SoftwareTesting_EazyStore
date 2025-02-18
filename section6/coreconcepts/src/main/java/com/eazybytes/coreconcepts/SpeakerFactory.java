package com.eazybytes.coreconcepts;

public class SpeakerFactory {

    public Speaker getSpeaker() {
        return new SonySpeaker();
    }
}
