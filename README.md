# react-native-bluetooth-classic

This is a library exposes the methods needed for bluetooth communication between devices.

```
The methods this library exposed are :
* requestEnable               Requests that the Android Bluetooth adapter be enabled
* isEnabled                   checking if Bluetooth enabled
* list                        Lists the currently connected/bonded devices.
* discoverDevices             Attempt to discover unpaired devices
* cancelDiscovery
* pairDevice                  Attempts to pair to the requested device Id
* unpairDevice
* accept                      Start listening for connections.
* cancelAccept
* connect                     connect to the device with the provided Id
* disconnect
* isConnected
* getConnectedDevice
* writeToDevice
* readFromDevice
* readUntilDelimiter          Attempts to read from the device buffer
* Available                   Gets the available information within the buffer
```

## Versions

### [0.0.1] - 2021-01-13
- Updated RNBluetoothClassicModule to add major bluetooth functions

## Getting started

#### Android

1. Navigate to the main application project example cd sita-mobile-app-verifier
2. add entry in package.json "rn-bluetooth-classic": "git+https://my_deploy_token:my_deply_token_Pwd@repo.aticloud.aero/blockchain/covid-demo/indicio/rn-bluetooth-classic.git",
3. run link command ex : react-native link rn-bluetooth-classic
4. import RNBluetoothClassic, { BTEvents, BTCharsets } from 'react-native-bluetooth-classic'; now you are ready to use it.
  
#### Usage

Import the module using the following

```javascript
import RNBluetoothClassic, { BTEvents, BTCharsets } from 'react-native-bluetooth-classic';
```

## Example test projects for reference

Check out the [BluetoothClassicExample](https://repo.aticloud.aero/blockchain/covid-demo/indicio/rn-bluetooth-classic/tree/master/BluetoothClassicExample) for details on getting the project setup and performing some generic tasks. 


#### Incase Android gradle issues 

When first building the Android project there were issues with react-native-create-library and the version of Android/Gradle installed on my machine.  This needed to be resolved by ensuring that the project was inline with the version of Android Studio and the Android plugin for gradle.  In my case, the project was configured with 1.3.1 and 2.2, which caused problems, in order to resolve [Android plugin for gradle versions](https://developer.android.com/studio/releases/gradle-plugin.html)

1. Updated `gradle-wrapper.properties` to modify the line:
`distributionUrl=https\://services.gradle.org/distributions/gradle-5.1.1-all.zip`

2. Updated `build.gradle` to ensure the buildscript section matched the following:
  - Added google() to buildscript
  - added jcenter() to repositories

```
buildscript {
    repositories {
        google()
        jcenter()
    }

    dependencies {
        classpath 'com.android.tools.build:gradle:3.4.0'
    }
}

repositories {
    mavenCentral()
    google()
    jcenter()
}
```