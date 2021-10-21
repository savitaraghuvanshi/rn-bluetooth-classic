package sita.im.bluetooth.event;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;

import sita.im.bluetooth.BluetoothState;

public class BluetoothStateEvent extends BluetoothEvent {

    private BluetoothState state;

    public BluetoothStateEvent(BluetoothState state) {
        super(BluetoothState.ENABLED == state
                ? EventType.BLUETOOTH_ENABLED : EventType.BLUETOOTH_DISABLED);
        this.state = state;
    }


    @Override
    public ReadableMap buildMap() {
        WritableMap map = Arguments.createMap();
        map.putString("state", state.name());
        map.putBoolean("enabled", BluetoothState.ENABLED == state);
        return map;
    }
}
