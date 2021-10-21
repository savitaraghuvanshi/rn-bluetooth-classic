package sita.im.bluetooth.conn;

import sita.im.bluetooth.BluetoothException;
import sita.im.bluetooth.Exceptions;
import sita.im.bluetooth.device.NativeDevice;

/**
 * Connection failed.
 *
 * link
 */
public class ConnectionFailedException extends BluetoothException {

    public ConnectionFailedException(NativeDevice device, Throwable error) {
        super(device,
                Exceptions.CONNECTION_FAILED.message(device.getAddress()),
                error);
    }
}
