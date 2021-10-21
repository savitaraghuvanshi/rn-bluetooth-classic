import { NativeModules } from "react-native";
import BluetoothDevice from "./BluetoothDevice";
import BluetoothError from "./BluetoothError";
import { BluetoothEventType, } from "./BluetoothEvent";
import BluetoothModule from "./BluetoothModule";
import {acceptBluetoothConnections,sendData,discoverDevice , sendOtherBtDeviceItsDeviceId} from "./BluetoothUtil"
import CheckIfOffline from "./NetInfo"
export default new BluetoothModule(NativeModules.RNBluetoothClassic);
export { BluetoothDevice, BluetoothError, BluetoothEventType };
export { CheckIfOffline , acceptBluetoothConnections , sendData , discoverDevice ,sendOtherBtDeviceItsDeviceId };

