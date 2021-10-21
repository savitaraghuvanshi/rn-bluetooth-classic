# BluetoothClassicExample

Example application built to test the installation and functionality of [rn-bluetooth-classic](https://repo.aticloud.aero/blockchain/covid-demo/indicio/rn-bluetooth-classic) .

## Creation Process

The *BluetoothClassicExample* application was created following the example on the [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) documentation (react-native-cli on MacOS path).



#
## Install [rn-bluetooth-classic](https://repo.aticloud.aero/blockchain/covid-demo/indicio/rn-bluetooth-classic) Library

Now we need to setup the library within the example application for development.  With the addition of [autolinking](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md) in v0.60.0 there are two options:

1. Adding the local library information found [here](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md#user-content-how-can-i-autolink-a-local-library).  

2. Manually link the project, which is the choice I made, since it is still straight forward.


#### Android 

Without running `react-native link` since pretty much all the documentation says not to do it, I've manually added the project in all the places that it's expected in Android:

*settings.gradle*
```
rootProject.name = 'BluetoothClassicExample'
include ':rn-bluetooth-classic'
project(':rn-bluetooth-classic').projectDir = new File(rootProject.projectDir, '../../android')
```

*app/build.gradle*
```
dependencies {
    implementation project(':rn-bluetooth-classic')
    implementation fileTree(dir: "libs", include: ["*.jar"])
    implementation "com.facebook.react:react-native:+"  // From node_modules
```

*MainApplication.java*
```
List<ReactPackage> packages = new PackageList(this).getPackages();
packages.add(new RNBluetoothClassicPackage());
// Packages that cannot be autolinked yet can be added manually here, for example:
// packages.add(new MyReactNativePackage());
```

#### Running the Application and testing


Git repo url : https://repo.aticloud.aero/blockchain/covid-demo/indicio/rn-bluetooth-classic

------------------------------------
If you would like to experiment with its working you would need to 


1) 	 git clone https://repo.aticloud.aero/blockchain/covid-demo/indicio/rn-bluetooth-classic.git

2)	 go to example project to see its working , this example project has use of all basic functions that get exposed by this library .

run “cd rn-bluetooth-classic\BluetoothClassicExample>”

3)  Install app

```	
    Run  “npm install”
    Run "npm install buffer" 
    
```
    
4)	Run “react-native start” 

5)	In case you see “SyntaxError: Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\]” issue 

go to BluetoothClassicExample\node_modules\metro-config\src\defaults\blacklist.js and replace var sharedBlacklist to 

```
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

```

6)	Run again “react-native start” on one command window 
7)	Open another command window and go to BluetoothClassicExample 
  “cd rn-bluetooth-classic\BluetoothClassicExample>”

8)	Run “react-native run-android”  this will make apk to transfer on to your connected android devices  

Note :How to transfer APK using USB and enable debugging please refer to running-on-device

For testing open apps on each device 
9)	 On first device click on button “accept connections”
10)	 On second device from the list of devices click the device you would like to connect 
11)	And here you go you can  exchange messages


