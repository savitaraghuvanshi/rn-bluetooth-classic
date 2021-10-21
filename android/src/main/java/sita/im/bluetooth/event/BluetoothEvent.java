package sita.im.bluetooth.event;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;

import java.util.Calendar;

import sita.im.bluetooth.Mappable;
import sita.im.bluetooth.Utilities;

public abstract class BluetoothEvent implements Mappable {

    private EventType eventType;

    public BluetoothEvent(EventType eventType) {
        this.eventType = eventType;
    }

    @Override
    public WritableMap map() {
        WritableMap map = Arguments.createMap();
        map.putString("eventType", eventType.name());
        map.putString("timestamp", Utilities.formatDate(Calendar.getInstance().getTime()));
        map.merge(buildMap());
        return map;
    }

    /**
     * Applies custom information for the event.
     *
     * @return
     */
    public abstract ReadableMap buildMap();

}
