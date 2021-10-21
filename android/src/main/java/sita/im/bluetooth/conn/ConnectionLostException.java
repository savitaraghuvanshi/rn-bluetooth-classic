package sita.im.bluetooth.conn;

import sita.im.bluetooth.BluetoothException;
import sita.im.bluetooth.Exceptions;
import sita.im.bluetooth.device.NativeDevice;

/**
 * Connection lost.
 *
 * link
 */
public class ConnectionLostException extends BluetoothException {

    public ConnectionLostException(NativeDevice device, Throwable e) {
        super(device,
                Exceptions.CONNECTION_LOST.message(device.getAddress()),
                e);
    }
}
