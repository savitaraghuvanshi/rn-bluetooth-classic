package sita.im.bluetooth.conn;

import sita.im.bluetooth.BluetoothException;

public class AcceptFailedException extends BluetoothException {
    public AcceptFailedException(String message, Throwable cause) {
        super(message, cause);
    }
}
