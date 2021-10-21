package sita.im.bluetooth;

public class InvalidBluetoothEventException extends IllegalArgumentException {
    private String requestedEvent;

    public InvalidBluetoothEventException(String requestedEvent) {
        this.requestedEvent = requestedEvent;
    }
}
