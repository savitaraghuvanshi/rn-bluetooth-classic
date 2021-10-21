import RNBluetoothClassic, {CheckIfOffline} from 'rn-bluetooth-classic'

import {
  PermissionsAndroid
} from 'react-native';

const acceptBluetoothConnections = async (
  functionToCallAfterDataRead,
  intervalToPollInMillSec,
) => {
  try {
    let bluetoothEnabled = await RNBluetoothClassic.requestBluetoothEnabled()
    console.log('is bluetooth enabled : ', bluetoothEnabled)
    if (bluetoothEnabled) {
      readIntervalId = setInterval(
        () => performRead(functionToCallAfterDataRead),
        intervalToPollInMillSec,
      )
      RNBluetoothClassic.accept({delimiter: '\r'})
    }
  } catch (err) {
    console.log('Error in acceptBluetoothConnections', err)
  }
}

const performRead = async (functionToCallAfterDataRead) => {
  try {
    let connectedDevices = new Array()
    connectedDevices = await RNBluetoothClassic.getConnectedDevices()
    if (connectedDevices && connectedDevices.length > 0) {
      for (let i = 0; i < connectedDevices.length; i++) {
        let device = connectedDevices[i]
        let available = await RNBluetoothClassic.availableFromDevice(device.id)
        if (available > 0) {
          alert('hey there is data read from bluetooth')
          for (let i = 0; i < available; i++) {
            console.log(`reading ${i}th time`)
            let data = await RNBluetoothClassic.readFromDevice(device.id)
            console.log(`Read data ${data}`)
            await functionToCallAfterDataRead(data , device.id)
          }
        }
      }
    }
  } catch (err) {
    console.log('Error in performRead', err)
  }
}

const sendData = async (
  deviceId,
  data,
  functionToCallAfterDataRead,
) => {
  try {
    let isBluetoothEnabled = await RNBluetoothClassic.requestBluetoothEnabled()
    console.log('is bluetooth enabled : ', isBluetoothEnabled)
    if (isBluetoothEnabled && deviceId && data) {
      data = data + '\r'
      let [connectedDevice, isDataSent] = await connectAndSendData(deviceId, data)
      if (connectedDevice && isDataSent) {
        this.readSubscription = connectedDevice.onDataReceived((data) =>
          functionToCallAfterDataRead(data),
        )
      }
    }
  } catch (error) {
    console.log(
      'Error occurred sendDataAndRegisterForRead to device ',deviceId ,error,
    )
  }
}

const connectAndSendData = async (deviceId, dataToSend) => {
  let connectedDevice
  try {
    let isDeviceConnected = await RNBluetoothClassic.isDeviceConnected(deviceId)
    console.log('isDeviceConnected:', isDeviceConnected)
    //alert(isDeviceConnected)
    if (isDeviceConnected === false) {
      connectedDevice = await RNBluetoothClassic.connectToDevice(deviceId)
      if (connectedDevice === 'undefined') {
        console.log(
          'Aborting sending msg since bt connection cant be made with device ',
          deviceId,
        )
        return
      }
      alert('BT Connection is successful with device' + deviceId)
      console.log(
        'bluetooth Connection is successful with device ',
        connectedDevice,
      )
    }
    await RNBluetoothClassic.writeToDevice(deviceId, dataToSend, 'ascii')
    console.log(
      'Message is successfully sent via bluetooth to device ',
      deviceId,
    )
    alert('msg sent by bt')
    return [connectedDevice, true]
  } catch (error) {
    console.log(
      'Error occurred while sending data to a device ${deviceId} via bluetooth: ',
      deviceId,
      error,
    )
  }
}


const discoverDevice = async (deviceToDiscover,listnerFunctionForDataRead) => {
  let granted = await requestAccessFineLocationPermission();
  if (!granted) {
    throw new Error('Access fine location was not granted');
  }
  alert("discoverDevice fn called 1")
  console.log('deviceToDiscover::',deviceToDiscover)
  console.log('listnerFunctionForDataRead::',listnerFunctionForDataRead)
  let discoveredDevices = new Array()
  discoveredDevices = await RNBluetoothClassic.startDiscovery(); 
  //RNBluetoothClassic.onDeviceDiscovered((device) =>this.handleDiscoveredDevice(device,deviceToDiscover,listnerFunctionForDataRead), )
  for (let i = 0; i < discoveredDevices.length; i++) {
    let device = discoveredDevices[i]
    console.log(`discovered device found : `,device)
    handleDiscoveredDevice(device,deviceToDiscover,listnerFunctionForDataRead)
  }
}

const requestAccessFineLocationPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Access fine location required for discovery',
      message:
        'In order to perform discovery, you must enable/allow ' +
        'fine location access.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    }
  );
  return granted === PermissionsAndroid.RESULTS.GRANTED;
};

const handleDiscoveredDevice = async (device,deviceToDiscover,listnerFunctionForDataRead) => {
  //'Redmi12'
  if(device.name === deviceToDiscover ){
    alert(deviceToDiscover+" device discovered")
    console.log('Match found ::::::::::::::::::::::::::::::::::::: ::',deviceToDiscover,device)
    sendOtherBtDeviceItsDeviceId(device.id,listnerFunctionForDataRead ,false)
  }
}

const sendOtherBtDeviceItsDeviceId = async (otherDeviceId,listnerFunctionForDataRead,isBtHandShakeDone) => {
  const deviceId = {
    deviceId: otherDeviceId ,
    isBtHandShakeDone: isBtHandShakeDone 
  }    
  let str = JSON.stringify(deviceId)
  console.log('str  ::',str)
  let messageBuffer = Buffer.from(str)
  await sendData(otherDeviceId,messageBuffer,listnerFunctionForDataRead)
}


export {acceptBluetoothConnections, sendData, discoverDevice,sendOtherBtDeviceItsDeviceId}
